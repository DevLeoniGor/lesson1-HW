import logo from './logo.svg';
import './App.css';

const Header = ({children}) =>
    <header>
        <img src="images/logo-1.svg" alt="A-Level"/>
        <nav>
            <ul id="nav">
                <li><a href="https://google.com" target="_blank">Item 1</a></li>
                <li><a href="https://google.com" target="_blank">Item 2</a></li>
                <li><a href="https://google.com" target="_blank">Item 3</a></li>
                <li><a href="https://google.com" target="_blank">Item 4</a></li>
                <li><a href="https://google.com" target="_blank">Item 5</a></li>
            </ul>
        </nav>
    </header>

const Aside = ({children, idName}) =>
    <aside id={idName}>
        {children}
    </aside>

const OurWork = ({children, title, imgName}) =>
    <div className="our-work-item">
        <img src={imgName} alt="" />
            <h3>{title}</h3>
            <p>{children}</p>
            <a href="#">Go</a>
    </div>

const Footer = ({children}) =>
    <footer>
        <div>{children}</div>
    </footer>

const App = () =>
    <>
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <title>Title</title>
            <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <Header/>
            <main>
                <article>
                    <p>Meiarcu aperiri nostrum posse inimicus veritus erat odio.  Vocibuserroribus minim repudiare nostra pharetra quem eirmod patrioque.
                        Bibendumefficiantur ignota hendrerit praesent postea ocurreret persius dis magnis rutrum elit eius euismod postulant.  Semperrisus reprehendunt legere singulis orci facilisi civibus nonumy nobis varius lorem discere id luptatum ancillae venenatis menandri tale constituam.  Maluissetaliquid commune mea fringilla gloriatur finibus natoque adipiscing libris gubergren delectus mattis dictumst delenit dicant fuisset.
                        Invenirealiquet voluptaria novum sem possit tractatos an vocibus tempor minim velit corrumpit etiam audire aliquet dico orci.  Mazimlaudem tritani agam reformidans quam eam electram magnis dissentiunt velit corrumpit adversarium.  Meadapibus id moderatius.  Suavitatealiquid fabulas percipit prodesset honestatis ex appareat debet tation inani graecis neglegentur vel bibendum interdum proin gloriatur nisl alia.  Conseteturancillae perpetua doming ridiculus delenit alia veri auctor postea torquent ultrices diam adipisci cursus reprehendunt dicam omnesque vulputate penatibus.  Hendreriteloquentiam scripta augue accommodare errem eu egestas feugait fringilla dicunt fermentum tota tation autem omittam mutat.
                        Expetendissententiae tristique placerat dicta hac.  Tortorquaeque inimicus hendrerit penatibus.  Persequerisidque habemus curae volumus neque felis id fames magna has numquam.  Tibiquedecore senectus magna maiestatis a dicam porttitor movet efficiantur liber molestie at arcu malesuada hac nibh litora.  Platonemlacinia nullam duo novum quo fabellas ponderum mattis sodales maecenas.</p>
                    <h1>Our Work</h1>

                    <div id="our-work">
                        <OurWork title="Lorem ipsum dolor sit." imgName="https://picsum.photos/180/180?random=1">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.  Possimprincipes erroribus decore inani cras natoque lobortis ac efficiantur novum putent audire mus.  Urbanitasinterdum equidem omittam egestas primis erat.  Imperdietquo suas habeo sapien nullam ceteros malorum erat.
                            Lectusaccumsan dignissim tota bibendum habemus ancillae inani saperet oratio.
                            Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.
                            Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.
                            Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.
                            Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.
                            Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.</OurWork>

                        <OurWork title="Lorem ipsum dolor sit amet." imgName="https://picsum.photos/180/180?random=2">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.  Possimprincipes erroribus decore inani cras natoque lobortis ac efficiantur novum putent audire mus.  Urbanitasinterdum equidem omittam egestas primis erat.  Imperdietquo suas habeo sapien nullam ceteros malorum erat.
                            Lectusaccumsan dignissim tota bibendum habemus ancillae inani saperet oratio.  Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.</OurWork>

                        <OurWork title="Lorem ipsum dolor sit amet, consectetur." imgName="https://picsum.photos/180/180?random=3">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.  Possimprincipes erroribus decore inani cras natoque lobortis ac efficiantur novum putent audire mus.  Urbanitasinterdum equidem omittam egestas primis erat.  Imperdietquo suas habeo sapien nullam ceteros malorum erat.
                            Lectusaccumsan dignissim tota bibendum habemus ancillae inani saperet oratio.  Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.</OurWork>

                        <OurWork title="Lorem ipsum dolor sit." imgName="https://picsum.photos/180/180?random=4">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.  Possimprincipes erroribus decore inani cras natoque lobortis ac efficiantur novum putent audire mus.  Urbanitasinterdum equidem omittam egestas primis erat.  Imperdietquo suas habeo sapien nullam ceteros malorum erat.
                            Lectusaccumsan dignissim tota bibendum habemus ancillae inani saperet oratio.  Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.</OurWork>

                        <OurWork title="Lorem ipsum dolor sit amet, consectetur adipisicing." imgName="https://picsum.photos/180/180?random=5">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.  Possimprincipes erroribus decore inani cras natoque lobortis ac efficiantur novum putent audire mus.  Urbanitasinterdum equidem omittam egestas primis erat.  Imperdietquo suas habeo sapien nullam ceteros malorum erat.
                            Lectusaccumsan dignissim tota bibendum habemus ancillae inani saperet oratio.  Laoreetnostrum conubia labores dicit vivamus proin discere latine dictas alterum noster atomorum falli falli.</OurWork>

                        <OurWork title="Lorem ipsum dolor sit amet." imgName="https://picsum.photos/180/180?random=6">Senserithis laoreet tristique assueverit commune viverra scelerisque sapientem.  Aliquetdetracto mnesarchum explicari detracto at libris errem ornare definitiones patrioque.</OurWork>
                    </div>
                </article>
                <Aside idName="aside1">
                    Aside 1
                </Aside>
                <Aside idName="aside2">
                    Aside 2
                </Aside>
            </main>
            <Footer>
                Леонід Горлован <a href="tel:+38088-88-88-888">+38088-88-88-888</a>
            </Footer>
        </body>
        </html>
    </>

export default App;
