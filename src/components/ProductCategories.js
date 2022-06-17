import PropTypes from 'prop-types'
import ProductCategory from './ProductCategory'

const ProductCategories = ({ productCategoriesData }) => {
  return productCategoriesData?.map(productCategory => (
    <ProductCategory key={productCategory.id} productCategoryData={productCategory} />
  ))
}

ProductCategories.propTypes = {
  productCategoriesData: PropTypes.array
}

export default ProductCategories
