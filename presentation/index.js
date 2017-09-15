// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  salt: require("../assets/new/gifit_1490222292602.gif"),
  beautify: require("../assets/new/giphy.gif"),
  ssr: require("../assets/new/6e55696340d29634cae64f5c544e0e70.jpg"),
  buildIt: require("../assets/new/building-up-tearing-down_500x400.png"),
  codeBase: require("../assets/new/codebase.jpg"),
  flash: require("../assets/new/flash.jpg"),
  batsword: require("../assets/new/gifit_1478297560929.gif"),
  sia: require("../assets/new/gifit_1478297669143.gif"),
  markdown: require("../assets/markdown.png"),
  beforeSsrOptimization: require("../assets/new/before.png"),
  afterSsrOptimization: require("../assets/new/after.png")
};

const examples = {
  1: require("../assets/examples/1.example"),
  2: require("../assets/examples/2.example"),
  3: require("../assets/examples/3.example")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: { name: "Open Sans", googleFont: true, styles: [ "400", "700i" ] },
  secondary: { name: "Helvetica", googleFont: true, styles: [ "400", "700i" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Нужен ли вам React SSR ?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Gentle introduction to react ssr
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Когда нужно использовать SSR</Heading>
          <List textColor="primary">
            <ListItem>SEM, SEO - Baidu, Bing, Yahoo</ListItem>
            <ListItem>Наилучшая производительность</ListItem>
            <ListItem>UX, "Лаг" на начальный рендеринг</ListItem>
            <ListItem>Item 4 (Ваше приложение работает)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[1]} lang="jsx" style={{fontSize: '24px', width: '100%', height: '160px'}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[2]} lang="jsx" style={{fontSize: '24px', width: '100%', height: '260px'}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[3]} lang="html" style={{fontSize: '24px', width: '100%', height: '260px'}} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">ReactDOM.renderToString</Heading>
          <Heading size={2} textColor="secondary"> - Sync</Heading>
          <Heading size={3} textColor="secondary"> - ReRender all always</Heading>
          <Heading size={4} textColor="secondary"> - CPU waste</Heading>
          <Heading size={5} textColor="secondary"> - Memory waste</Heading>
          <Text size={6} textColor="secondary"> + Universal app</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>React’s server-side rendering can become a performance bottleneck for pages requiring many virtual DOM nodes</Quote>
            <Cite>Walmart Labs</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.flash.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote>Все ради скорости.</Quote>
            <Cite>«The Flash»</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1}>
            До оптимизация
          </Heading>
          <Image src={images.beforeSsrOptimization.replace("/", "")} style={{ 'height': 'auto', 'maxWidth': '100%'}}/>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1}>
            После оптимизация
          </Heading>
          <Image src={images.afterSsrOptimization.replace("/", "")} style={{ 'height': 'auto', 'maxWidth': '100%'}}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1}>
            Увидимся в будущем!
          </Heading>
          <Image src={images.sia.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
      </Deck>
    );
  }
}
