# SVG Playing Cards Components for React Applications
This package offers a set of React SVG components for playing cards that have been converted from Adrian Kennard's classic [SVG and print ready playing card designs](https://www.me.uk/cards/). Each card is presented as an SVG element, simplifying its integration into any React application.

## Usage

### 1. Using a specific card
To use a specific card, you can import the corresponding component from the package and render it within your component. The card's suit and rank are represented by the first and second letters of the component name respectively.

```js
import { Sq } from '@letele/playing-cards';

//...

return (
  <div className='card-container'>
    <Sq style={{ height: '100%', width: '100%' }} />
  </div>
);
```

### 2. Using the whole deck
You can also import the entire deck of cards and access specific cards as needed. Import the deck object from the package and use the card components as properties of the deck object. This approach allows you to dynamically choose cards to render.

```js
import * as deck from '@letele/playing-cards';

const Card = deck['Sq'];

//...

return (
  <div className='card-container'>
    <Card style={{ height: '100%', width: '100%' }} />
  </div>
);
```

### Card Container Dimensions
The dimensions of the card container are fixed at a ratio of 5:7 (width:height). Therefore, to ensure the SVG card spans the entire height and width of the container, set the height and width of the card SVG to 100%.
```js
return (
  <div className='card-container'>
    <Card style={{ height: '100%', width: '100%' }} />
  </div>
);
```

## Supported Cards
The package provides SVG components for standard playing cards, including different ranks (A, 2-10, J, Q, K) and suits (Hearts, Diamonds, Clubs, Spades). Additionaly there are 2 joker cards (J1, J2) and 2 back side cards (B1,B2) that represent the backside of a card.

### Card Naming Convention
The naming convention for card components is a combination of the suit and rank initials. 
- H:Hearts,D:Diamonds,C:Clubs,S:Spades
- The ranks are: (a,2-10,j,q,k)
- For instance, H2 represents the 2 of Hearts, and Sk represents the King of Spades.

## License
This package is distributed under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication license as from the
original svg cards from [Adrian Kennard](https://www.me.uk/cards/).