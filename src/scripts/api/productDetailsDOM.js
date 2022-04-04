
async function getProductDetails(id) {
    fetch("http://localhost:3001/products", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': ' * '
        }
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('fejl')
                return []
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            let product = data.results.find(element => element.name === id)
            
            document.title += " - " + data.name
            let output = `
            <main class="page">

        <section class="productDescription standardMargin">
            <div class="productDescription__compare">
                <div class="productDescription__compareArrows">
                    <div class="compareArrows__arrowLeftDiv">
                        <i data-feather="arrow-left"></i>
                    </div>
                    <div class="compareArrows__arrowRightDiv">
                        <i data-feather="arrow-right"></i>
                    </div>

                </div>
                <p class="productDescription__compareP">Compare</p>
            </div>

            <h1 class="productDescription__name x-largeH1">Marshall Bullshit Brand V5</h1>
            <div class="productDescription__productImages">
                <div class="productDescription__thumbnails">
                    <div class="productDescription__thumbnail"><img class="productDescription__thumbnailImg"
                            src="/images/placeholder_img.jpg" alt="klik for at se en stor udgave af dette billede">
                    </div>
                    <div class="productDescription__thumbnail"><img class="productDescription__thumbnailImg"
                            src="/images/placeholder_img.jpg" alt="klik for at se en stor udgave af dette billede">
                    </div>
                    <div class="productDescription__thumbnail"><img class="productDescription__thumbnailImg"
                            src="/images/placeholder_img.jpg" alt="klik for at se en stor udgave af dette billede">
                    </div>
                </div>
                <div class="productImages__productDisplay">
                    <div class="productImages__arrowLeftDiv">
                        <i data-feather="arrow-left-circle"></i>
                    </div>
                    <div class="productImages__currentImageDiv">
                        <img src="/images/placeholder_img.jpg" alt="Billede af produktet"
                            class="productImages__CurrentImageImg">
                    </div>
                    <div class="productImages__arrowRightDiv">
                        <i data-feather="arrow-right-circle"></i>
                    </div>

                </div>
            </div>
            <article class="productDescription__article">

                <div class="productDescription__directionWrapper">
                    <div class="productDescription__ratingPlusDesc">
                        <div class="productDescription__rating">
                            <div class="productDecription__stars">
                                <i data-feather="star"></i>
                                <i data-feather="star"></i>
                                <i data-feather="star"></i>
                                <i data-feather="star"></i>
                                <i data-feather="star"></i>
                            </div>
                            <p class="productDecription__ratingFigure"></p>
                            <p class="productDecription__reviewBasis">Based on <span
                                    class="productDecription__totalReviews">76</span> reviews.</p>
                        </div>
                        <h3 class="productDescription__flavor_text">De ultimative over-ear-hovedtelefoner</h3>
                        <p class="productDescription__desc">Bevægende, mesterlig, hypnotiserende. Fortab dig i musikken
                            med
                            hovedtelefoner, der har justerbar støjreduktion og omdefinerer lytteoplevelser på farten.
                        </p>
                    </div>
                    <div class="productDecription__colorPickerDiv">
                        <div class="productDecription__colorPicker"></div>


                    </div>
                </div>
                <p class="productDecription__price">100£</p>
                <button class="productDecription__addToCart standardBtn">Add to cart</button>
                <p class="productDecription__shipping">Shipping every day at 5:00 PM</p>



            </article>

        </section>

        <section class="productSpecs standardMargin">
            <article class="productSpecs__soundArticle">
                <hr class="productSpecs__line">
                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Sound</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>

                <ul class="productSpecs__sound">
                    <li class="productSpecs__soundDesc">

                    </li>

                </ul>
            </article>
            <article class="productSpecs__designArticle">
                <hr class="productSpecs__line">
                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Design</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__design">
                    <li class="productSpecs__height"></li>
                    <li class="productSpecs__width"></li>
                    <li class="productSpecs__weight"></li>
                    <li class="productSpecs__designDesc"></li>
                </ul>
            </article>
            <article class="productSpecs__connectivityArticle">
                <hr class="productSpecs__line">
                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Connectivity</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__connectivity">
                    <li class="productSpecs__battery"></li>
                    <ul class="productSpecs__type">

                    </ul>
                </ul>
            </article>
            <article class="productSpecs__reviewsArticle">
                <hr class="productSpecs__line">
                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Reviews</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__reviews">
                    <li class="productSpecs__reviewName"></li>
                    <li class="productSpecs__reviewStars"></li>
                    <li class="productSpecs__reviewText"></li>
                    <li class="productSpecs__reviewDate"></li>

                </ul>
            </article>
            <article class="productSpecs__stockArticle">
                <hr class="productSpecs__line">
                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">In stock</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__stock">
                    <li class="productSpecs__stockAmount"></li>
                </ul>
            </article>



        </section>

        <div class="reviewThisProduct">
            <i data-feather="comment-square"></i>
            <p class="reviewThisProductP">Review<br>Product</p>


        </div>

        <section class="similarProducts standardMargin">
            <h2 class="similarProducts__header">Products like this</h2>
            <div class="similarProducts__images">
                <div class="similarProducts__arrowLeftDiv">
                    <i data-feather="arrow-left-circle"></i>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage">
                </div>
                <div class="similarProducts__currentImageDiv">
                    <img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage">
                </div>
                <div class="similarProducts__currentImageDiv">
                    <img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage">
                </div>
                <div class="similarProducts__arrowRightDiv">
                    <i data-feather="arrow-right-circle"></i>
                </div>
            </div>
        </section> 
            
            `

            document.querySelector(".page").innerHTML += output

        })
}
getAllProducts()

export default getProductDetails