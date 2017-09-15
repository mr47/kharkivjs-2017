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
    logo: require("../assets/new/mr47.png"),
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
    afterSsrOptimization: require("../assets/new/after.png"),
    promiseReject: require("../assets/new/07-server-side-rendering-2-opt.png")
};

const examples = {
    1: require("../assets/examples/1.example"),
    2: require("../assets/examples/2.example"),
    3: require("../assets/examples/3.example"),
    4: require("../assets/examples/4.example"),
    5: require("../assets/examples/5.example"),
    6: require("../assets/examples/6.example"),
    7: require("../assets/examples/7.example")
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
      <Deck transition={["zoom", "slide"]} contentHeight={860} contentWidth={1100} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Нужен ли вам React SSR ?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Gentle introduction to react ssr
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={6} lineHeight={1} textColor="primary">
                Dmitry Poddubniy a.k.a <Text textColor="tertiary">@mr47</Text>
            </Heading>
            <Image src={images.logo.replace("/", "")} margin="40px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Когда нужно использовать SSR</Heading>
          <List textColor="primary">
            <ListItem>SEM, SEO - Baidu, Bing, Yahoo</ListItem>
            <ListItem>Хотим наилучшую производительность</ListItem>
            <ListItem>Убрать "лаг" на начальный рендеринг</ListItem>
            <ListItem>Письма / PDF</ListItem>
            <ListItem>Ваше приложение работает</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
           <Heading size={6} сaps>Как же выглядит SSR на самом деле.</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
            <Heading size={6} caps lineHeight={1} textColor="secondary">
                Как то вот так -
            </Heading>
           <Image src={images.ssr.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[1]} lang="jsx" style={{ fontSize: "24px", width: "100%", height: "160px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[2]} lang="jsx" style={{ fontSize: "24px", width: "100%", height: "260px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[3]} lang="html" style={{ fontSize: "24px", width: "100%", height: "260px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" margin="0px 0px 10% 0px">Что дает ReactDOM.renderToString:</Heading>
            <Text textAlign="left" size={6} textColor="primary"> + Universal app</Text>
            <List style={{ listStyle: "none" }}>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Sync</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Rerender always</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - CPU waste</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Memory waste</Text></ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="secondary" caps>О чем мало кто говорит: </Heading>
            <List textColor="primary">
              <ListItem>ComponentDidMount</ListItem>
              <ListItem>Компоненты не поддерживающие SSR</ListItem>
              <ListItem>Canvas / WebGL</ListItem>
              <ListItem>Двойной рендеринг</ListItem>
              <ListItem>Race conditions</ListItem>
              <ListItem>Передача начального состояния на клиент</ListItem>
              <ListItem>Позиционирование / масштабированние элементов</ListItem>
              <ListItem>Анимация</ListItem>
              <ListItem>setState transaction</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote textColor="secondary">
              <Quote>Warning: React attempted to reuse markup in a container but the checksum was invalid.</Quote>
              <Cite>«console.log»</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
             <Heading size={6} textColor="secondary" caps>Пример проблемы</Heading>
             <CodePane fit source={examples[4]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
              <CodePane fit source={examples[5]} lang="jsx" style={{ fontSize: "18px" }} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
              <Image src={images.promiseReject.replace("/", "")} margin="0px auto 10px" fit/>
        </Slide>
        <Slide transition={["slide"]}>
            <Heading size={1} fit lineHeight={1}>
               В React 16.0.0-rc.2, проблема решена
            </Heading>
        </Slide>
        <Slide transition={["slide"]}>
            <Heading size={1} fit lineHeight={1}>componentDidCatch</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={6} caps lineHeight={1} textColor="primary">
                Если ы все еще хотите SSR тогда,
            </Heading>
            <Image src={images.batsword.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
              <Heading size={6} textColor="secondary" caps>Что же нам поможет: </Heading>
              <List textColor="primary">
                  <ListItem>redux</ListItem>
                  <ListItem>redux</ListItem>
                  <ListItem>react-router</ListItem>
                  <ListItem>no-ssr component</ListItem>
                  <ListItem>ssr proxy (Internal project)</ListItem>
                  <ListItem>react-jobs</ListItem>
                  <ListItem>react-server</ListItem>
                  <ListItem>react-ssr-optimization</ListItem>
                  <ListItem>less components do more</ListItem>
              </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="secondary" caps>React-server: </Heading>
            <List textColor="primary">
                <ListItem>Parallelize backend queries</ListItem>
                <ListItem>Bundle data for transfer to browser</ListItem>
                <ListItem>Stream HTML to the browser</ListItem>
                <ListItem>Wire up elements as they arrive</ListItem>
                <ListItem>Enable page-to-page transitions</ListItem>
                <ListItem>Render quickly, even when the backend is slow</ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.flash.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote>Все ради скорости.</Quote>
            <Cite>«The Flash»</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <CodePane fit source={examples[6]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
             <CodePane fit source={examples[7]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1}>
            До оптимизация
          </Heading>
          <Image src={images.beforeSsrOptimization.replace("/", "")} style={{ "height": "auto", "maxWidth": "100%" }}/>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1}>
            После оптимизации
          </Heading>
          <Image src={images.afterSsrOptimization.replace("/", "")} style={{ "height": "auto", "maxWidth": "100%" }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Image src={images.beautify.replace("/", "")} fit/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>React’s server-side rendering can become a performance bottleneck for pages requiring many virtual DOM nodes.</Quote>
                <Cite>Walmart Labs</Cite>
            </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.flash.replace("/", "")} bgDarken={0.75}>
            <BlockQuote>
                <Quote>У всего есть цена...</Quote>
                <Cite>«The Flash»</Cite>
            </BlockQuote>
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
