export default function ShopifyBuyButton({ buttonId }) {

  return (
    <div className="buy-button-wrap lg:mr-6">
      <div id={`product-component-${buttonId}`}></div>
    </div >
  )
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

declare var ShopifyBuy: any;

export function loadShopifyBuyButton(buttonId: number) {

  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  var scriptId = 'shopifyBuyScript';

  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    script.id = scriptId;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'keepkey.myshopify.com',
      storefrontAccessToken: '716d51a0ed2af603f469e98f887a9250',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '9270065358',
        node: document.getElementById(`product-component-${buttonId}`),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                },
                // "text-align": "left"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "600",
                "font-size": "15px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "white-space": "nowrap",
                "border": "2px solid #a58958",
                "letter-spacing": "0px",
                "height": "57px",
                "margin-top": "-15px !important",
                "border-radius": "2px",
                "padding-left": "22%",
                "padding-right": "22%",
                "text-overflow": "clip",
                ":hover": {
                  "background-color": "#a58958"
                },
                "@media (min-device-width: 375px)": {
                  "font-size": "17px !important",
                },
                "@media (min-device-width: 1024px)": {
                  "font-size": "20px !important",
                  "letter-spacing": ".8px !important",
                  "padding-left": "40px !important",
                  "padding-right": "40px !important",
                  "height": "100% !important",
                  "padding-bottom": "16px !important"
                },
                "background-color": "#b79862",
                ":focus": {
                  "background-color": "#a58958"
                },

              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "price": {
                "font-family": "Roboto, sans-serif"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif"
              },
              "unitPrice": {
                "font-family": "Roboto, sans-serif"
              },
              "description": {
                "font-family": "Roboto, sans-serif"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Buy Now"
            },
            "googleFonts": [
              "Roboto:wght@400;700&display=swap"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#a58958"
                },
                "background-color": "#b79862",
                ":focus": {
                  "background-color": "#a58958"
                },
                "border-radius": "2px",
                "padding-left": "26px",
                "padding-right": "26px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                "color": "#4c4c4c"
              },
              "unitPrice": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                "color": "#4c4c4c"
              },
              "description": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "14px",
                "color": "#4c4c4c"
              }
            },
            "googleFonts": [
              "Roboto:wght@400;700&display=swap"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif"
              },
              "select": {
                "font-family": "Roboto, sans-serif"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#a58958"
                },
                "background-color": "#b79862",
                ":focus": {
                  "background-color": "#a58958"
                },
                "border-radius": "2px"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "header": {
                "color": "#4c4c4c"
              },
              "lineItems": {
                "color": "#4c4c4c"
              },
              "subtotalText": {
                "color": "#4c4c4c"
              },
              "subtotal": {
                "color": "#4c4c4c"
              },
              "notice": {
                "color": "#4c4c4c"
              },
              "currency": {
                "color": "#4c4c4c"
              },
              "close": {
                "color": "#4c4c4c",
                ":hover": {
                  "color": "#4c4c4c"
                }
              },
              "empty": {
                "color": "#4c4c4c"
              },
              "noteDescription": {
                "color": "#4c4c4c"
              },
              "discountText": {
                "color": "#4c4c4c"
              },
              "discountIcon": {
                "fill": "#4c4c4c"
              },
              "discountAmount": {
                "color": "#4c4c4c"
              }
            },
            "text": {
              "notice": "Shipping is added at checkout. Buyers outside the US may be responsible for additional customs duties and fees."
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                "background-color": "#b79862",
                ":hover": {
                  "background-color": "#a58958"
                },
                ":focus": {
                  "background-color": "#a58958"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "lineItem": {
            "styles": {
              "variantTitle": {
                "color": "#4c4c4c"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "price": {
                "color": "#4c4c4c"
              },
              "fullPrice": {
                "color": "#4c4c4c"
              },
              "discount": {
                "color": "#4c4c4c"
              },
              "discountIcon": {
                "fill": "#4c4c4c"
              },
              "quantity": {
                "color": "#4c4c4c"
              },
              "quantityIncrement": {
                "color": "#4c4c4c",
                "border-color": "#4c4c4c"
              },
              "quantityDecrement": {
                "color": "#4c4c4c",
                "border-color": "#4c4c4c"
              },
              "quantityInput": {
                "color": "#4c4c4c",
                "border-color": "#4c4c4c"
              }
            }
          }
        },
      });
    });
  }
}
