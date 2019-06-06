export const adapter = (data) => {
  return data.map((place) => {
    return {
      bedrooms: place.bedrooms,
      city: {
        location: [place.city.location.latitude, place.city.location.longitude],
        name: place.city.name
      },
      description: place.description,
      goods: place.goods,
      host: {
        avatarURL: place.host.avatar_url,
        id: place.host.id,
        isPro: place.host.is_pro,
        name: place.host.name
      },
      id: place.id,
      images: place.images,
      isFavorite: place.is_favorite,
      isPremium: place.isPremium,
      location: [place.location.latitude, place.location.longitude],
      maxAdults: place.max_adults,
      previewImage: place.preview_image,
      price: place.price,
      rating: place.rating,
      title: place.title,
      type: place.type
    };
  });
};
