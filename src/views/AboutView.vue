<script setup lang="ts"></script> 
<!-- once again ini nanti buat klo fullstack experiences nya gak pake statis lg makanya ada script -->

<template>
   <div class="container">
        <div class="profile-header">
            <!-- Representasi Foto dari Mockup Desain -->
            <div class="profile-img-placeholder"></div>
            <div class="profile-intro">
                <h2>Hi! I'm Rafli</h2>
                <div class="tagline">Tech Enthusiast, Developer, Freelancer & Musician <br /> based on Jakarta, Indonesia.</div>
                <hr>
                <p class="bio">
                    I'm just a chill guy whose days are packed with a random mix of things I love to do and things I absolutely must do. These range from coding websites and video games to repairing dying laptops and smartphones, writing songs and performing it with my band. When I just want to unwind, I'm simply surfing the web like everyone else.
                </p>
                <RouterLink to="/contact" active-class="active" class="btn btn-primary">Contact Me!</RouterLink>
            </div>
        </div>

        <!-- Bagian Pengalaman Sesuai Teks Mockup -->
        <h2>Experiences</h2>
        <section id="experience-section">
            <div class="exp-title">Computer Technician</div>
            <div class="exp-company">Cahaya Computer | 2023 - 2024</div>
            <ul>
                <li>Successfully repaired, upgraded and maintained PCs and laptops</li>
                <li>Successfully built PCs for office and gaming purposes</li>
                <li>Successfully deployed Operating Systems (e.g. Windows & Linux), installed softwares and drivers on PCs and laptops</li>
            </ul>
        </section>
      </div>
</template>

<style scoped>
.profile-header {
    display: flex;
    gap: 40px;
    align-items: start;
    margin-bottom: 50px;
}

.profile-img-placeholder {
    width: 30vw;
    height: 80vh;
    background-image: url('/img/about_pic.png');
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.profile-intro h2 {
    font-size: 9vh;
    margin-bottom: 5px;
}

.tagline {
    font-size: 3vh;
    font-weight: 600;
    margin-bottom: 15px;
}

.bio {
    font-size: 2.5vh;
    text-align: justify;
    margin-bottom: 20px;
}

#experience-section {
    background-color: var(--bg-placeholder);
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #1f2937;
    margin-top: 40px;
}

.exp-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}

.exp-company {
    font-size: 14px;
    margin-bottom: 15px;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
}

@media screen and (max-width:1427px) {
    .tagline br {
        display: none;
    }

    .profile-intro h2 {
        font-size: 7vh;
        margin-bottom: 5px;
    }
}

@media screen and (max-width: 768px) {
    .profile-header{
        flex-direction: column;
    }

    .profile-img-placeholder{
        width: 90vw;
        height: 50vh;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .profile-intro h2 {
        font-size: 5vh;
        margin-bottom: 5px;
    }

    .tagline {
        font-size: 2vh;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .bio {
        font-size: 1.5vh;
        text-align: justify;
    }
}
</style>
