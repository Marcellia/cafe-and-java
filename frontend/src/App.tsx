import styled from "styled-components";
import ButtonAppBar from "./components/AppBar";
import coffeeTable from "./Assets/coffeeTable.jpg";
import dessert from "./Assets/dessert.jpg"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import coffee from "./Assets/CoffeeCup.png"
const Wrapper = styled.section`

`;

const Background = styled.div`

position: fixed;
  top: 80;
  left: 0;
  width: 100vw;
  z-index: -1;
  background: papayawhip;
  height: 50vh;
  opacity: 0.9;
margin-top:10em;

`


const WelcomeImage = styled.img`
  height: 50%;
  width: 37%;
  border-radius:5%;
`;
const Introduction = styled.div`
  margin-top:11rem;
  padding:1rem;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  overflow-y: 'auto';


`;
const MainImage = styled.img`
width: 90em;
/* height:30em; */ 
`;
const IntroductionText = styled.p`
text-align: center;
letter-spacing:1.5px;
word-spacing:2px;
margin-left:2rem;
font-size:1.5em;
`
const WelcomeText = styled.div`
font-family: Brush Script MT, cursive;
text-align: center;
letter-spacing:1.5px;
word-spacing:2px;
font-size: 3em;
`
function App() {
  return (
    <Wrapper>
      <ButtonAppBar />
      <Background></Background>
      <Introduction>
        <MainImage src={dessert} alt='dessert'></MainImage>
        <IntroductionText style={{ fontSize: '3em' }}> WELCOME TO</IntroductionText>
        <WelcomeText> CAFE & JAVA</WelcomeText>

        <IntroductionText> <AccessTimeIcon style={{ fontSize: '1em' }} /> Monday to Saturday | 8 am - 5 pm </IntroductionText>
        <IntroductionText><LocationOnIcon /> 221 Baker St </IntroductionText>
        <img src={coffee} alt="Logo" style={{ height: '15em' }} />
        <IntroductionText style={{ fontSize: '3em' }}>About Us</IntroductionText>
        <IntroductionText>
          At the heart of our cafe is a love for good food, great coffee, and a
          warm and inviting atmosphere. We believe that a cafe should be a place
          where people can come together to socialize, work, or simply relax
          with a cup of coffee and a delicious pastry.

        </IntroductionText>
        <IntroductionText>Our journey began with a passion for baking and a desire to share our love of coffee with the world. We started small, selling our baked goods at local markets and events, but quickly realized that we wanted to create a space where people could come to enjoy our food and drinks in a comfortable and welcoming environment.</IntroductionText>
        <WelcomeImage src={coffeeTable} alt="Logo" />
        <IntroductionText>
          Welcome to our cozy little corner of the Cafe & Java! We're thrilled to have you here. Pull up a chair, grab a cup of coffee, and get ready to indulge in some seriously delicious eats. Whether you're looking to catch up with friends, get some work done, or simply treat yourself, we've got you covered. We hope you'll stay awhile and make yourself at home. Oh, and don't forget to save room for dessert – you won't want to miss out on our mouthwatering pastries!
        </IntroductionText>

        <IntroductionText style={{ fontSize: '3em' }}>We are known for</IntroductionText>

        <IntroductionText />
        <IntroductionText>
          Cappuccino:
        </IntroductionText>
        <IntroductionText>
          At our cafe, we believe that the perfect cup of coffee starts with high-quality, freshly roasted beans and expertly trained baristas. Our cappuccino is a classic Italian beverage made with a shot of espresso, steamed milk, and a layer of frothed milk on top. We take great care to ensure that each cappuccino is made to perfection, with a rich, creamy texture and a bold, flavorful taste that will leave you wanting more.
        </IntroductionText>
        <IntroductionText>
          Croissant:
        </IntroductionText>
        <IntroductionText>
          Our croissants are a labor of love, made from scratch each day with only the finest ingredients. We start with a buttery, flaky pastry dough and roll it out to create the signature crescent shape. Each croissant is then baked to perfection, resulting in a light, crispy exterior and a soft, fluffy interior. Whether enjoyed on their own or paired with a steaming cup of coffee, our croissants are sure to delight your taste buds.
        </IntroductionText>
        <IntroductionText>
          Desserts:
        </IntroductionText>
        <IntroductionText>
          We believe that life is too short to skip dessert, which is why we take great pride in our selection of sweets. From classic pastries like éclairs and fruit tarts to rich, decadent cakes and cookies, our desserts are made with the highest quality ingredients and baked fresh each day. Whether you're in the mood for something indulgent or just need a little pick-me-up, our desserts are the perfect treat to brighten your day.
        </IntroductionText>


      </Introduction>
    </Wrapper>
  );
}

export default App;
