const apiKey = '3Y2otagvbhdhDeTAio4RGNKtklsQWu9E80IMOd7BdYxVJoJ5ISal12EYffjSVFOMMa2ksMg79qtS4pVx5auSzLn5_3sl64sSM1t5hIG6j7bcKNHWBVif6y2N5nraXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
      throw new Error('Network response was not ok.');
    })
  }
};
export default Yelp;

