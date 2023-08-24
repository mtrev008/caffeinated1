<template>
    <div class="db">
      <h1>Submit a Review</h1>
  
      <!-- Section for Review Creation & Update -->
      Email:<input type="text" v-model.trim="email" />
      <br>
      City:<input type="text" v-model.trim="city" />
      <br>
      Cafe Name:<input type="text" v-model.trim="cafeName" />
      <br>
      Rating:<input type="number" min="1" max="5" v-model.trim="reviewScore" />
      <br>
      Review Content:<input type="text" v-model.trim="reviewContent" />
      <br>
      <button @click="createReview()">Create</button>
      <br>
  
      <!-- Section for Review Query -->
      Filter by City:<input type="text" v-model.trim="cityFilter" />
      <br>
      <button @click="queryReviews()">Query</button>
      <template v-for="review in reviews">
        <p>{{ review.city || 'Missing City' }} {{ review.reviewScore || 'Missing Rating' }} 
          <br>
          {{ review.reviewContent || 'No Review Included' }}
        </p>
      </template>
      <br>
  
      <!-- Section for Review Read -->
      ID Lookup:<input type="text" v-model.trim="reviewReadId" />
      <br>
      <button @click="readReview()">Read</button>
      <template v-if="readReviewsData">
        <p>{{ readReviewsData.email || 'Missing Email' }} {{ readReviewsData.city || 'Missing City' }} - {{ readReviewsData.id }}</p>
      </template>
      <br>
  
      <!-- Section for Review Delete -->
      ID Delete:<input type="text" v-model.trim="reviewDeleteId" />
      <br>
      <button @click="deleteReview()">Delete</button>
    </div>
  </template>
  
  <script>
  import { db } from '../firebaseResources';
  import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    deleteDoc,
  } from 'firebase/firestore'
  
  export default {
    data() {
      return {
        // data for display
        reviews: [],
        readReviewsData: null,
  
        // v-model variable for update
        reviewUpdateId: null,
  
        // v-model variables for creation
        city: null,
        email: null,
        reviewScore: null,
        reviewContent: null,
        cafeName: null,
  
        // v-model variable for query
        cityFilter: null,
  
        // v-model variable for read
        reviewReadId: null,
  
        // v-model variable for delete
        reviewDeleteId: null,
      };
    },
    methods: {
      async createReview() {
        if (
          this.email != null &&
          this.email.length > 0 &&
          this.city != null &&
          this.city.length > 0
        ) {
          try {
            console.log('Calling createReview');
  
            console.log('Creating review:', { email: this.email, city: this.city, reviewScore: this.reviewScore, reviewContent: this.reviewContent, cafeName: this.cafeName});
  
            // We use the addDoc function to insert a document into the database. We start with the
            // collection that we want to insert into (in this case eployees) followed by an object
            // representing the data we want to write. We can write complex objects to the database
            // (you can read online all the types that firestore supports) but you can't/shouldn't
            // write things like functions. If you create classes to represent you data (which I
            // recommend in many cases) then you can create a converter function that returns an
            // object representing how the class should be written to the database
            const docReference = await addDoc(
              collection(db, 'reviews'),
              {
                email: this.email,
                city: this.city,
                cafeName: this.cafeName,
                reviewScore: this.reviewScore,
                reviewContent: this.reviewContent,
              }
            );
  
            // We could specify the id of the new document were inserting by adding it to the end of
            // the collection like 'collection(db, 'reviews', someId)' but if we omit that then it
            // will have a random id generated automatically
            console.log('New review has ID:', docReference.id);
  
            console.log('Completed createReview')
          } catch(err) {
            console.error('Error in createReview', err);
          }
        }
      },
      async queryReviews() {
        try {
          console.log('Calling queryReviews');
  
          // Reset the reviews data, typically you would hide data loads
          // behind a loader which you would turn on when this operation starts
          // and turn off when the data is loaded
          this.reviews = [];
  
          // Create a query against the reviews collection
          let q = query(collection(db, 'reviews'));
  
          // If the cityFilter input has some value (is not falsy) then we
          // apply a where filter to check for matching first names. Note that
          // we actually create a new query using the existing one and the
          // additional filter
          if (this.cityFilter) {
            console.log('Adding filter', this.cityFilter);
            q = query(q, where('city', '==', this.cityFilter));
          }
  
          // We use getDocs (with an s) to query while we use getDoc (no s) to
          // get a single record
          const queryResponse = await getDocs(q);
  
          // Iterate over the results to add them to the reviews reactive variable
          queryResponse.forEach((responseItem) => {
            console.log({ id: responseItem.id, data: responseItem.data() });
  
            // Note that here we add objects to the reviews reactive variable, and
            // that object includes the id of the record as well as spreading all the
            // fields the record itself contains. This allows us to reference each field
            // in the document directly (as well as the id if needed)
            this.reviews.push({
              id: responseItem.id,
              ...responseItem.data(),
            });
          });
  
          console.log('Completed queryReviews');
        } catch(err) {
          console.error('Error in queryReviews', err);
        }
      },
      async readReview() {
        if (this.reviewReadId != null && this.reviewReadId.length > 0) {
          try {
            console.log('Calling readReview');
  
            // Create a doc reference with the reviews collection and the
            // id of the record we want to retrieve
            const docReference = doc(db, 'reviews', this.reviewReadId);
  
            // Call getDoc to retrieve the specific document that we want
            // This represents a specific get rather than a query and is
            // very efficient
            const response = await getDoc(docReference);
  
            console.log({ id: response.id, ...response.data() });
            // Note here that we create the same type of object in the read
            // case that we do in the query case. Having a consistent shape
            // of the data makes it easier for everyone to reason about how
            // to use search results. You could even create a class or function
            // that takes in the data and generates this type of object and
            // use that everywhere for consistency
            this.readReviewsData = {
              id: response.id,
              ...response.data(),
            }
            // We could also have re-used the reviews reactive variable and
            // replaced it with this data rather than using a separate variable
            // and elements
  
            console.log('Completed readReviews');
          } catch(err) {
            console.error('Error in readReview', err);
          }
        }
      },
      async deleteReview() {
        if (this.reviewDeleteId != null && this.reviewDeleteId.length > 0) {
          try {
            console.log('Calling deleteReview');
  
            const docReference = doc(db, 'reviews', this.reviewDeleteId);
            // Note that deleting a document that doesn't exist doesn't throw
            // and error and the deleteDoc function returns nothing (they say
            // if you delete something that doens't exist then it was successful
            // which sorta makes sense)
            await deleteDoc(docReference);
            // If we wanted to be reactive we could do any of the following:
            // 1. Lookup the deleted id in reviews array and if it exists
            //    then remove it. This is very quick, but you might need to
            //    add it back in the case that the delete actually fails
            // 2. Trigger the query function again after the delete completes
            //    to make sure we have totally up to data data. This means we
            //    will have up to date data (including changes from any other
            //    sources that might have happened elsewhere) but increases the
            //    load on the database
            // For document changes, Firestore also offers the onSnapshot and
            // snapshot listener which can be given a callback that will be
            // triggered each time the document is updated
  
            console.log('Completed deleteReview');
          } catch(err) {
            console.error('Error in deleteReview', err);
          }
        }
      },
    }
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  