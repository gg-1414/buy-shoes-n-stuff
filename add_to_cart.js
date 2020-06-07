// Add To Cart Research 
// 1. "on click" event calls `handleAddToCart` 

  // pages/home/HomeVariantCard.js
  <ATC 
    onclick={handleAddToCart}
    variantSku={variant.sku}
    ATCAdded={ATCAdded}
    ATCAdding={ATCAdding}
    btnStyle="atc-button"
  />

  const handleAddToCart = useCallback(() => {
    setATCAdded(true)
    setATCAdding(true)
    setTimeout(() => {
      addToCart(cart, variant, 1)
      setATCAdding(false)
      // ...
    })
  }, 500)

  // components/atcoutofstock.js
  export const ATC = ({price, onClick, variantSku, ATCAdded, ATCAdding, btnStyle}) => (
    <Button 
      fullwidth 
      onClick={onClick}
      disabled={variantSku === null} 
      className={btnStyle || 'atc-button'}
    >
    </Button>
  )

  // modules/cart/functions.js
  export const addToCart = (cart, selectedVariant, quantity) => {
    store.dispatch(requestAddToCart(cart, selectedVariant, quantity)) // requestAddToCart is an action creator
  }
 
  // modules/cart/actions
  // *
  // * Actions are payloads of information that send data from your application to your store.
  export const requestAddToCart = (cart, product, quantity) => async(dispatch, getState) => {
    const {client: stompClient, replyTo} = getState().stomp
    const params = {
      cart, 
      product,
      quantity,
      segmentAnonymousId: localStorageClient.get('ajs_anonymous_id')
    }
    const obj = JSON.stringify(msgpack.encode(params))
  }

  stompClient.send(
    '/exchange/cart/cart.request.addtocart',
    {
      'reply-to': replyTo,
      'correlation-id': ObjectId(),
      token: localStorageClient.get('olympusToken')
    },
    obj
  );

  // 
  dispatch({
    type: REQUEST_ADD_TO_CART,
    payload: {}
  });

  // @segment Product Added
  window.analytics.track('Product Added', {
    image_url: `https:${product.assets.thumbnail}`,
    quantity: 1,
    sku: product.sku,
    price: Number.parseFloat(product.effectivePrice),
    product_id: product.id,
    variant: product.name,
    name: product.name,
    brand: cart.storeCode,
    cart_id: cart._id
  });

  // modules/cart/types
  export const REQUEST_ADD_TO_CART = 'REQUEST_ADD_TO_CART';

  // modules/cart/reducer
  // *
  // * The reducer is a pure function that takes the previous state and an action, and returns the next state. 
  