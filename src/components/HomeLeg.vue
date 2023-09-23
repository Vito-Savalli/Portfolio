<template>
  <!-- header design -->
  <header class="header">
    <a href="#" class="logo">Portfolio.</a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <nav class="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- home section design -->
  <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>John Kendric</h1>
      <h3>And I'm a <span class="multiple-text"></span></h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        aliquam, modi aspernatur placeat architecto amet laudantium id.
      </p>
      <div class="social-media">
        <a href="#"><i class="bx bxl-facebook"></i></a>
        <a href="#"><i class="bx bxl-twitter"></i></a>
        <a href="#"><i class="bx bxl-instagram-alt"></i></a>
        <a href="#"><i class="bx bxl-linkedin"></i></a>
      </div>
      <a href="#" class="btn">Download CV</a>
    </div>

    <div class="home-img">
      <img src="../assets/images/home.png" alt="" />
    </div>
  </section>

  <!-- about section design -->
  <section class="about" id="about">
    <div class="about-img">
      <img src="../assets/images/about.png" alt="" />
    </div>

    <div class="about-content">
      <h2 class="heading">About <span>Me</span></h2>
      <h3>Frontend Developer!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        officia asperiores labore officiis suscipit ex at non impedit nostrum
        animi illum mollitia itaque reprehenderit laudantium molestiae eum porro
        molestias repudiandae, amet ea eos alias corporis laborum nobis. Tempore
        deserunt repellendus quos nihil voluptas aut est suscipit.
      </p>
      <a href="#" class="btn">Read More</a>
    </div>
  </section>

  <!-- services section design -->
  <section class="services" id="services">
    <h2 class="heading">Our <span>Services</span></h2>

    <div class="services-container">
      <div class="services-box">
        <i class="bx bx-code-alt"></i>
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dignissimos vitae magni aut commodi non laborum nisi alias iusto
          voluptatibus.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="services-box">
        <i class="bx bxs-paint"></i>
        <h3>Graphic Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dignissimos vitae magni aut commodi non laborum nisi alias iusto
          voluptatibus.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="services-box">
        <i class="bx bx-bar-chart-alt"></i>
        <h3>Digital Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dignissimos vitae magni aut commodi non laborum nisi alias iusto
          voluptatibus.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>

  <!-- portfolio section design -->
  <section class="portfolio" id="portfolio">
    <h2 class="heading">Latest <span>Project</span></h2>

    <div class="portfolio-container">
      <div class="portfolio-box">
        <img src="../assets/images/portfolio1.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio2.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio3.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio4.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio5.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio6.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- contact section design -->
  <section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me!</span></h2>

    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="input-box">
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <input type="submit" value="Send Message" class="btn" />
    </form>
  </section>

  <!-- footer design -->
  <footer class="footer">
    <div class="footer-text">
      <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
    </div>

    <div class="footer-iconTop">
      <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      menuIcon: null,
      navbar: null,
      sections: null,
      navLinks: null,
    };
  },
  mounted() {
    this.menuIcon = this.$refs.menuIcon;
    this.navbar = this.$refs.navbar;
    this.sections = this.$refs.sections;
    this.navLinks = this.$refs.navLinks;

    this.setupEventListeners();
    this.setupScrollReveal();
    this.setupTypedJS();
  },
  methods: {
    setupEventListeners() {
      this.menuIcon.onclick = () => {
        this.menuIcon.classList.toggle("bx-x");
        this.navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        this.handleScroll();
      };
    },
    handleScroll() {
      // Your onscroll logic here...
    },
    setupScrollReveal() {
      ScrollReveal({
        // reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      // Your ScrollReveal logic here...
    },
    setupTypedJS() {
      const typed = new Typed(this.$refs.multipleText, {
        strings: ["Frontend Developer", "YouTuber", "Blogger"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    },
  },
};
</script>

<style></style>
