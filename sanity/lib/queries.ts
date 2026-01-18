export const BESTSELLERS_QUERY = `*[_type == "product" && isBestseller == true]{
  _id,
  title,
  price,
  description,
  "imageUrl": mainImage.asset->url,
  category
}`;

export const PRODUCTS_QUERY = `*[_type == "product" 
  && (!defined($category) || category in $category)
  && (!defined($size) || $size in sizes)
  && price >= $minPrice && price <= $maxPrice
] | order(_createdAt desc) {
  "id": _id,
  "name": title,
  price,
  "imageUrl": mainImage.asset->url,
  category,
  description,
  sizes,
  isBestseller
}`;

export const PRODUCT_BY_ID_QUERY = `*[_type == "product" && _id == $id][0] {
  "id": _id,
  "name": title,
  price,
  "imageUrl": mainImage.asset->url,
  category,
  description,
  sizes,
  isBestseller
}`;