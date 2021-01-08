<!-- Contact block -->
<template>
    <div class="contact-section ">

        <div class="container">
            <div class="row">
                <div class="col-md-12  text-center">
                    <h3 class="section-title">Say Hello</h3>
                </div>
            </div>
            <div class="row">

                <!-- Contact Tab -->
                <div class="col-xl-5  col-md-6 ">
                    <div class="tab-wrapper">
                        <b-card no-body>
                            <b-tabs card>
                                <b-tab title="Paris" active>
                                    <b-card-text>
                                        <p>1 rue de Paris  - 75009 Paris</p>
                                        <p>+33 9 34 67 89 45</p>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="London">
                                    <b-card-text>
                                        <p>1 London road  - 75009 London</p>
                                        <p>+39 9 34 67 89 45</p>
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                    <div class="footer-social">
                       <h4 class="footer-social-title">Follow us</h4>

                        <b-navbar-nav class="footer-social-icon">
                            <b-nav-item href="#" title="Twitter"><span class="fa">&#xf099;</span></b-nav-item>
                            <b-nav-item href="#" title="facebook"><span class="fa">&#xf09a;</span></b-nav-item>
                            <b-nav-item href="#" title="Linkedin"><span class="fa">&#xf0e1;</span></b-nav-item>
                        </b-navbar-nav>
                    </div>
                </div>

                <!-- Contact form -->
                <div class="col-xl-7 col-md-6">
                    <div class=" contact-right-content">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './Contact.scss';
import ContactForm from './ContactForm';
export default {
    name: 'Contact',
    components: {
        ContactForm
    }
}
</script>


