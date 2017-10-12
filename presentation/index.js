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

// TODO: меньше кода (подчистить) только то что важно

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
    promiseReject: require("../assets/new/07-server-side-rendering-2-opt.png"),
    v16: require("../assets/Censored_rubber_stamp.svg"),
    promiseReject2: require("../assets/08-server-side-rendering-3-opt.png"),
    ssr2: require("../assets/ssr.png"),
    csr: require("../assets/csr.png")
};

const examples = {
    1: require("../assets/examples/1.example"),
    2: require("../assets/examples/2.example"),
    3: require("../assets/examples/3.example"),
    4: require("../assets/examples/4.example"),
    5: require("../assets/examples/5.example"),
    6: require("../assets/examples/6.example"),
    7: require("../assets/examples/7.example"),
    8: require("../assets/examples/8.example"),
    9: require("../assets/examples/9.example"),
    10: require("../assets/examples/10.example")
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
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Нужен ли вам React SSR ?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; introduction to react ssr
          </Text>
          <Image src={images.v16.replace("/", "")} height="200px" style={{ "position": "absolute", "left": "3%", top: "27%", "transform": "rotate(30deg)" }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={6} lineHeight={1} textColor="primary">
                Dmitry Poddubniy a.k.a <Text textColor="tertiary">@mr47</Text>
            </Heading>
            <Image src={images.logo.replace("/", "")} margin="40px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary">Когда нужно использовать SSR</Heading>
          <List textColor="primary">
            <ListItem>SEM, SEO - Baidu, Bing, Yahoo</ListItem>
            <ListItem>Хотим наилучшую производительность</ListItem>
            <ListItem>Убрать "лаг" на начальный рендеринг</ListItem>
            <ListItem>Письма / PDF</ListItem>
            <ListItem>Ваше приложение работает</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Image src={images.csr.replace("/", "")} margin="0px auto 40px" height="650px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Image src={images.ssr2.replace("/", "")} margin="0px auto 40px" height="600px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
           <Heading size={6} сaps>Как же выглядит SSR на самом деле.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
           Как работает React v15.x SSR, сервер
          </Heading>
          <CodePane source={examples[1]} lang="jsx" style={{ fontSize: "22px", width: "100%", height: "520px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            На клиенте
          </Heading>
          <CodePane source={examples[2]} lang="jsx" style={{ fontSize: "24px", width: "100%", height: "260px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            Что на выходе у ReactDOM.renderToString
          </Heading>
          <CodePane source={examples[3]} lang="html" style={{ fontSize: "24px", width: "100%", height: "260px" }} />
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
            <Heading size={6} lineHeight={1.5} textColor="secondary">
                Легко описать SSR так :
            </Heading>
            <Image src={images.ssr.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="secondary" margin="0px 0px 10% 0px">Какие плюсы и минусы у SSR:</Heading>
            <Text textAlign="left" size={6} textColor="primary"> + Universal / Isomorphic app</Text>
            <List style={{ listStyle: "none" }}>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Sync</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Rerender always</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - CPU waste</Text></ListItem>
                <ListItem><Text textAlign="left" size={6} textColor="primary"> - Memory waste</Text></ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} сaps>Но это было в 15 версии в 16й нас ждет...</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
              Render -> Hydrate
          </Heading>
          <CodePane source={examples[8]} lang="jsx" style={{ fontSize: "22px", width: "100%", height: "200px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
              Arrays, Strings, Numbers
          </Heading>
          <CodePane source={examples[9]} lang="jsx" style={{ fontSize: "22px", width: "100%", height: "640px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
              Render -> Hydrate
          </Heading>
          <CodePane source={examples[8]} lang="jsx" style={{ fontSize: "22px", width: "100%", height: "200px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" margin="0px 0px 10% 0px">Для SSR в React 16.0.0:</Heading>
          <List textColor="primary">
              <ListItem>Обратная совместимость</ListItem>
              <ListItem>Render -> Hydrate</ListItem>
              <ListItem>Менее строгое сравнение содержимого</ListItem>
              <ListItem>componentDidCatch не работает</ListItem>
              <ListItem>Порталы тоже не работают им нужен DOM</ListItem>
              <ListItem>Stream API</ListItem>
              <ListItem>Fiber</ListItem>
              <ListItem>Оптимизированы warnings c process.env.NODE_ENV !== "production"</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="secondary">О чем мало кто говорит: </Heading>
            <List textColor="primary">
              <ListItem>ComponentDidMount</ListItem>
              <ListItem>Компоненты не поддерживающие SSR</ListItem>
              <ListItem>Canvas / WebGL</ListItem>
              <ListItem>Двойной рендеринг (Тру маунтинг близко)</ListItem>
              <ListItem>Race conditions</ListItem>
              <ListItem>Передача начального состояния на клиент</ListItem>
              <ListItem>Позиционирование / масштабированние элементов</ListItem>
              <ListItem>Начальная анимация</ListItem>
              <ListItem>Fiber + setState transaction</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary">setState: </Heading>
          <List textColor="primary">
              <ListItem>setState выполняется не моментально</ListItem>
              <ListItem>setState всегда вызывает rerender</ListItem>
              <ListItem>Fiber: pause</ListItem>
              <ListItem>Fiber: split</ListItem>
              <ListItem>Fiber: rebase</ListItem>
              <ListItem>Fiber: abort</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} сaps>Какие частые проблемы можно встретить.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote textColor="secondary">
              <Quote>Warning: React attempted to reuse markup in a container but the checksum was invalid.</Quote>
              <Cite>«console.log»</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
             <Heading size={6} textColor="secondary">Пример проблемы</Heading>
             <CodePane fit source={examples[4]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} line textColor="secondary" lineHeight={1.5} >Promise rejection</Heading>
          <Image src={images.promiseReject2.replace("/", "")} margin="0px auto 10px" fit/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
              <Heading size={6} line textColor="secondary" lineHeight={1.5} >Promise rejection</Heading>
              <Image src={images.promiseReject.replace("/", "")} margin="0px auto 10px" fit/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={6} lineHeight={1} textColor="primary">
                Если вы все еще хотите SSR тогда,
            </Heading>
            <Image src={images.batsword.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
              <Heading size={6} textColor="secondary" >Что же нам поможет: </Heading>
              <List textColor="primary">
                  <ListItem>redux</ListItem>
                  <ListItem>react-router</ListItem>
                  <ListItem>no-ssr component</ListItem>
                  <ListItem>proxy for ssr components</ListItem>
                  <ListItem>react-jobs</ListItem>
                  <ListItem>react-server</ListItem>
                  <ListItem>react-ssr-optimization</ListItem>
                  <ListItem>less components do more*</ListItem>
              </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.flash.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
              <Quote>Все ради скорости.*</Quote>
              <Cite>«The Flash»</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary">Почему Redux: </Heading>
          <List textColor="primary">
              <ListItem>Pure js (для нас SSR из коробки)</ListItem>
              <ListItem>Не используются Observers</ListItem>
              <ListItem>Reducers синхронные</ListItem>
              <ListItem>Состояние стора легко передать на клиент</ListItem>
              <ListItem>Восстановление состояния крайне просто</ListItem>
              <ListItem>Лучшая интеграция с react-router</ListItem>
              <ListItem>Отсутствуют сайд эффекты</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} сaps>Решение для data fetch (promises hell) - react-jobs</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={6} textColor="secondary">React-server: </Heading>
            <List textColor="primary">
                <ListItem>Параллельные запросы к серверу</ListItem>
                <ListItem>Сжатие данных для клиента</ListItem>
                <ListItem>Потоковая передача HTML</ListItem>
                <ListItem>Маунтинг</ListItem>
                <ListItem>Page-to-page переходы</ListItem>
                <ListItem>Рендеринг быстрый даже если backend медленный</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} сaps>React-ssr-optimization</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <CodePane fit source={examples[6]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
             <CodePane fit source={examples[7]} lang="jsx" style={{ fontSize: "24px" }} />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading textColor="tertiary" size={3} lineHeight={1.5}>
            До оптимизации
          </Heading>
          <Image src={images.beforeSsrOptimization.replace("/", "")} style={{ "height": "auto", "maxWidth": "100%" }}/>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading textColor="tertiary" size={3} lineHeight={1.5}>
            После оптимизации
          </Heading>
          <Image src={images.afterSsrOptimization.replace("/", "")} style={{ "height": "auto", "maxWidth": "100%" }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
            <Image src={images.beautify.replace("/", "")} fit/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary">Альтернативы: </Heading>
          <List textColor="primary">
              <ListItem>CSR (client side rendering )</ListItem>
              <ListItem>Next.js (static generator)</ListItem>
              <ListItem>react-snapshot (static pre-renderer)</ListItem>
              <ListItem>no-ssr component (частичное использование)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>React’s server-side rendering can become a performance bottleneck for pages requiring many virtual DOM nodes.</Quote>
                <Cite>Walmart Labs</Cite>
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
