<!DOCTYPE html>
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Portfolio</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,500" rel="stylesheet">
    <link rel="icon" href="images/favicon.png" sizes="32x32" type="image/png">
</head>



<body>
    <header>
        <div class="container">
            <div class="main">
                <div class="abc">
                    <a href="index.html">
                        <img id="logo" class="logo" src="images/Favicon 4.svg" alt="Logo">
                    </a>   
                    <nav>
                        <div id="current-item" class="burger">&#x2630;</div>
                        <div id="navigation" class="nav1 dropdown">
                            <a href="/">Home</a>
                            <a href="#folio">Portfolio</a>
                            <a href="#skills">Skills</a>
                            <a href="#info">About Me</a>
                            <a href="#contactme">Contact</a>
                        </div>
                    </nav>
                </div>
                <div class="hero">
                    <h1>Jake Moxon</h1>
                    <h2>Web Developer</h2>
                </div>
            </div>
        </div>
    </header>

    <section class="portfolio" id="folio">
        <div class="container">
            <h2 name="folio">My Portfolio</h2>
            <div class="projects">
                <div class="ppp">
                    <div class="img photo1">
                        <a class="project1" href="http://scratchmyapp.com" target="blank">
                            <div class="place hover1">
                                <span>ScratchMyApp</span>
                            </div>
                        </a>
                    </div>
                    <div class="img photo2">
                        <a class="project1" href="/weather-app" target="blank">
                            <div class="place hover2"><span>Weather App</span></div>
                        </a>
                    </div>
                    <div class="img photo3">
                        <a class="project1" href="/sky-scammer" target="blank">
                            <div class="place hover3"><span>Flight App</span></div>
                        </a>
                    </div>
                    <div class="img photo4">
                        <a class="project1" href="/exchange-rates" target="blank">
                            <div class="place hover4"><span>Exchange Rates</span></div>
                        </a>
                    </div>
                    <!-- <div class="img photo5">
                        <a class="project1" href="">
                            <div class="place hover5"><span>Thailand</span></div>
                        </a>
                    </div>
                    <div class="img photo6">
                        <a class="project1" href="">
                            <div class="place hover6"><span>Bled</span></div>
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    
    <section class="myskills" id="skills">
        <div class="container">
            <h2 name="skills">My Skills</h2>
            <div class="progress">
                <div class="skill1">HTML</div>
                <div class="bar">
                    <div class="knob" style="width: 90%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">CSS</div>
                <div class="bar">
                    <div class="knob" style="width: 90%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">JavaScript</div>
                <div class="bar">
                    <div class="knob" style="width: 80%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">React</div>
                <div class="bar">
                    <div class="knob" style="width: 70%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">PHP</div>
                <div class="bar">
                    <div class="knob" style="width: 50%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">Laravel</div>
                <div class="bar">
                    <div class="knob" style="width: 60%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">UX</div>
                <div class="bar">
                    <div class="knob" style="width: 90%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">Photoshop</div>
                <div class="bar">
                    <div class="knob" style="width: 100%"></div>
                </div>
            </div>
            <div class="progress">
                <div class="skill1">Illustrator</div>
                <div class="bar">
                    <div class="knob" style="width: 90%"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="aboutme" id="info">
        <div class="container">
            <h2 name="info">About Me</h2>
            <div class="aaa">
                <img class="me" src="images/Jake.jpg" alt="Jake Moxon">
                <div class="text">
                    <p>
                    A Junior Front-End Developer, I have recently enhanced my skills in web development by studying for 3 months in a Coding Bootcamp in Prague. Throughout my life, I have combined great problem solving and attention to detail with creative flair. Combining my coding skills with my keen eye for design, I have a very good base to build upon in front-end web development.  My reliability and willingness to learn would make me a valuable asset to any team and  I am hungry to fulfil my potential as a web developer. I am available to work immediately. 
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="findme">
        <div class="container">
            <h2>Find me here</h2>
            <div class="social">
                <a href="https://www.instagram.com/jakemox99/" target="_blank"><img class="icons" src="images/instagram.svg" alt="instagram"></a>
                <a href="https://github.com/jakemox" target="_blank"><img class="icons" src="images/github.svg" alt="github"></a>
                <a href="https://www.linkedin.com/in/jake-moxon-74a541134/" target="_blank"><img class="icons" src="images/linkedin.svg" alt="linkedIn"></a>
            </div>
        </div>
    </section>

    <section class="contactme" id="contactme">
        <div class="container">
            <h2 name="contact">Contact Me</h2>
            <!-- <div class="form"> -->
                <form class="form" id="contact" action="contact.php" method="post">
                    <div class="field1">
                        <img src="images/profile-01.svg" alt="" width="40px" height="40px">
                        <input name="name" placeholder="Your Name*" type="text" tabindex="1" required>
                    </div>
                    <div class="field1">
                        <img src="images/email.svg" alt="" width="40px" height="40px">
                        <input name="email" placeholder="Your Email*" type="email" tabindex="3" required>
                    </div>
                    <div class="field2"><p>Your message*</p><textarea name="message" placeholder="Your message*" tabindex="5" required></textarea></div>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send Message</button>
                </form>
            <!-- </div> -->
        </div>
    </section>

    <section class="nice">
        <div class="container">
            <h2>Nice to meet you!</h2>
            <p>Copyright &copy; Jake Moxon</p>
        </div>
    </section>

    <script src="main.js"></script>
</body>

</html>