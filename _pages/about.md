---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- I am currently a PhD student at The University of Edinburgh supervised by [Dr. Adriana Sejfia](https://www.linkedin.com/in/adriana-sejfia/) and [Dr. Amir Shaikhha](https://www.linkedin.com/in/amir-shaikhha-44985841/). -->

I received my Master’s degree from Imperial College London, where I was supervised by [Dr. Che Liu](https://www.linkedin.com/in/che-liu-32abcs7b1/) and [Dr. Rossella Arcucci](https://www.linkedin.com/in/rossella-arcucci-723a2b65/). 

Prior to that, I obtained my Bachelor’s degree from Beihang University, under the supervision of [Dr. Yuan Yuan](https://scse.buaa.edu.cn/info/1387/10369.htm).

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- 🎉 *Aug 2025*: One paper was accepted to <img src="images/logos/acl-logo.svg" width="20"/> EMNLP 2025.
- 🏆 Jul 2025: Thrilled to receive the Best Paper Award at the FMSD workshop at <img src="images/logos/icml-logo.svg" width="20"/> ICML 2025.
- 🎉 *Jun 2025*: One paper was accepted as a spotlight presentation at the FMSD workshop at <img src="images/logos/icml-logo.svg" width="20"/> ICML 2025.
<!-- - 📰 *Nov 2024*: I started my Doctor's degree in Informatics at The University of Edinburgh supervised by Dr. Adriana Sejfia and Dr. Amir Shaikhha. -->
- 🎉 *Sep 2024*: I graduated with Distinction from Imperial College London.
- 📰 *May 2024*: Glad to start my capstone project in <img src="images/logos/dsi-logo.svg" width="20"/> [Imperial Data Science Institute](https://www.imperial.ac.uk/data-science/) supervised by Dr. Che Liu and Dr. Rossella Arcucci.
- 📰 *Sep 2023*: I started my Master's degree in Computational Science and Engineering at Imperial College London.
- 🎉 *Jun 2023*: I graduated from Beihang University as one of the Distinguished Graduates.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/projects/supreme.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SuPreME: A Supervised Pre-training Framework for Multimodal ECG Representation Learning](https://aclanthology.org/2025.findings-emnlp.633/)

**Mingsheng Cai**, Jiuming Jiang, Wenhao Huang, Che Liu, Rossella Arcucci

[**Code**](https://github.com/mingscai/SuPreME) | [**Data**](https://huggingface.co/datasets/mingscai/SuPreME) | [**Model**](https://huggingface.co/mingscai/SuPreME)<strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Automated annotation of MIMIC-IV-ECG dataset with LLMs and medical DBs.

- Entity-level alignment of ECG signals via pre-training the SuPreME framework.

- SOTA zero-shot performance with high data efficiency across six downstream datasets, i.e. PTB-XL (Super-class, Sub-class, Form, Rhythm), CPSC-2018, CSN.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">FMSD @ ICML 2025</div><div class="badge">Spotlight & Best Paper Award</div><img src='images/projects/llm4ecg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Generalizable Multimodal ECG Representation Learning with LLM-extracted Clinical Entities](https://openreview.net/forum?id=bcG1W2T0Xx)

**Mingsheng Cai**, Jiuming Jiang, Wenhao Huang, Che Liu, Rossella Arcucci

- LLM-extracted clinical entities enable structured ECG supervision.

- Outperformed existing self-supervised methods with significantly improved data efficiency.

- Enabled scalable ECG representation learning without extensive expert annotations.
</div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 🎖 Honors and Awards
- *Jul 2025*, Best Paper Award, 1st ICML Workshop on Foundation Models for Structured Data.
- *Jun 2023*, Distinguished Graduate, Beihang University.
- *Dec 2022*, Merit Student, Beijing Municipal Education Commission.
- *Oct 2022*, Future Star Scholarship, Ministry of Education of the People's Republic of China.
- *Oct 2022*, Huawei Scholarship.
- *Aug 2022*, Third Prize, The 8th China International "Internet+" College Students’ Innovation and Entrepreneurship Competition.

# 📖 Educations
<!-- - *Nov 2024 - Apr 2028*, Doctor, <img src="images/logos/inf-logo.svg" width="21"/> [School of Informatics](https://informatics.ed.ac.uk/), <img src="images/logos/uoe-logo.svg" width="21"/> [The University of Edinburgh](https://www.ed.ac.uk/), Edinburgh, United Kingdom. -->
- *Sep 2023 - Sep 2024*, Master, <img src="images/logos/ala-logo.svg" width="19"/> [Ada Lovelace Academy](https://www.imperial.ac.uk/ada-lovelace-academy/), <img src="images/logos/icl-logo.svg" width="19"/> [Imperial College London](https://www.imperial.ac.uk/), London, United Kingdom.
- *Sep 2019 - Jun 2023*, Bachelor, <img src="images/logos/scse-logo.svg" width="25"/> [School of Computer Science and Engineering](https://scse.buaa.edu.cn/English/Home.htm), <img src="images/logos/buaa-logo.svg" width="21"/> [Beihang University](https://ev.buaa.edu.cn/), Beijing, China.
- *Sep 2016 - Jun 2019*, High School Diploma, <img src="images/logos/no1-high-logo.svg" width="22"/> [Changzhou No.1 High School](http://www.yz.czedu.cn/), Changzhou, China.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 🧑‍🏫 Teaching and Service
- *Sep 2025 - Jan 2026*, Tutor & Marker, INFR08032 - Software Engineering and Professional Practice, University of Edinburgh, Edinburgh, United Kingdom.
- *Feb 2022 - Jun 2022*, Teaching Assistant, B1B061060 - Discrete Mathematics, Beihang University, Beijing, China.


# 💻 Employment
- *Feb 2023 - Apr 2023*, Intern, <img src="images/logos/lenovo-logo.svg" width="20"/> [Lenovo](https://www.lenovo.com/), Beijing, China.
- *Oct 2022 - Jun 2023*, Research Intern, <img src="images/logos/scse-logo.svg" width="22"/> [Advanced Computer Technology Institute, BUAA](http://www.act.buaa.edu.cn/), Beijing, China.
- *JuL 2022 - Aug 2022*, Intern, <img src="images/logos/huawei-logo.svg" width="19"/> [Huawei](https://www.huawei.com/), Beijing, China.
- *Jan 2022 - May 2022*, Research Intern, <img src="images/logos/bcl-logo.svg" width="18"/> [Beijing City Lab](https://www.beijingcitylab.com/), Beijing, China.

# 🍸 Miscellaneous

<details>
<summary style="font-size: 1.3em; font-weight: bold; cursor: pointer; margin: 15px 0 10px 0; padding-left: 0; list-style: none;">
  🎵 Music
</summary>

<div style="text-align: center; margin: 20px auto 30px; max-width: 600px; padding: 0 20px;">
  <div style="font-style: italic; color: #666; font-size: 1.1em; line-height: 1.6;">
    "Where words fail, music speaks."
    <div style="margin-top: 10px; font-style: normal; font-size: 0.9em; color: #999;">— Hans Christian Andersen</div>
  </div>
</div>

<div style="margin-top: 20px; margin-bottom: 30px;">
  <div id="music-gallery" style="display: grid; grid-template-columns: repeat(6, 1fr); grid-auto-rows: 150px; gap: 15px; padding: 10px;">

    <!-- 灰色軌跡 - spans 2 columns -->
    <div style="grid-column: span 2; position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <iframe allow="autoplay *; encrypted-media *;" frameborder="0"
        height="150"
        style="width:100%; height:100%; overflow:hidden; background:transparent;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/cn/album/%E7%81%B0%E8%89%B2%E8%BD%A8%E8%BF%B9-%E7%94%B5%E5%BD%B1-%E5%A4%A9%E8%8B%A5%E6%9C%89%E6%83%85-%E6%AD%8C%E6%9B%B2/1464503952?i=1464504132&l=en-GB">
      </iframe>
    </div>

    <!-- Love You One More Time - spans 2 columns -->
    <div style="grid-column: span 2; position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <iframe allow="autoplay *; encrypted-media *;" frameborder="0"
        height="150"
        style="width:100%; height:100%; overflow:hidden; background:transparent;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/cn/album/%E9%98%81%E7%88%B1%E4%BD%A0%E4%B8%80%E6%91%86/1726970400?i=1726970401&l=en-GB">
      </iframe>
    </div>

    <!-- 但 (Damn) - spans 2 columns -->
    <div style="grid-column: span 2; position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <iframe allow="autoplay *; encrypted-media *;" frameborder="0"
        height="150"
        style="width:100%; height:100%; overflow:hidden; background:transparent;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/cn/album/%E4%BD%86/1679883738?i=1679884080&l=en-GB">
      </iframe>
    </div>

  </div>
</div>

</details>

<style>
/* Responsive design for music gallery */
@media (max-width: 768px) {
  #music-gallery {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  #music-gallery > div {
    grid-column: span 1 !important;
  }
}

@media (max-width: 480px) {
  #music-gallery {
    grid-template-columns: 1fr !important;
  }
}
</style>

<details>
<summary style="font-size: 1.3em; font-weight: bold; cursor: pointer; margin: 15px 0 10px 0; padding-left: 0; list-style: none;">
  📷 Photography
</summary>

<div style="text-align: center; margin: 20px auto 30px; max-width: 600px; padding: 0 20px;">
  <div style="font-style: italic; color: #666; font-size: 1.1em; line-height: 1.6;">
    "We take photos as a return ticket to a moment otherwise gone."
    <div style="margin-top: 10px; font-style: normal; font-size: 0.9em; color: #999;">— Katie Thurmes</div>
  </div>
</div>

<div style="margin-top: 20px; margin-bottom: 30px; position: relative;">
  <div id="photo-gallery-container" style="position: relative; overflow: hidden; max-height: 700px; transition: max-height 0.5s ease;">
    <div id="photo-gallery" style="column-count: 4; column-gap: 15px; padding: 10px;">
      <!-- Photos will be inserted here by JavaScript -->
    </div>

    <!-- Gradient overlay for fade effect -->
    <div id="photo-fade-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; height: 350px; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%); pointer-events: none; transition: opacity 0.3s ease;"></div>
  </div>

  <!-- Show more button -->
  <div style="text-align: center; margin-top: 20px;">
    <button id="toggle-photos-btn" onclick="toggleAllPhotos()" style="padding: 10px 20px; background: none; color: #666; border: none; cursor: pointer; font-size: 1.1em; font-weight: 500; transition: all 0.3s ease;">
      Show All ›
    </button>
  </div>
</div>

<script>
// Store all photo paths
const allPhotos = [
  'images/photos/DSCF0157.JPG',
  'images/photos/DSCF0369.JPG',
  'images/photos/DSCF0480.JPG',
  'images/photos/DSCF1198.JPG',
  'images/photos/DSCF1242.JPG',
  'images/photos/DSCF1275.JPG',
  'images/photos/DSCF1298.JPG',
  'images/photos/DSCF1717.JPG',
  'images/photos/DSCF1778.JPG',
  'images/photos/DSCF1788.JPG',
  'images/photos/DSCF2840.JPG',
  'images/photos/DSCF2913.JPG',
  'images/photos/DSCF1709.jpg',
  'images/photos/DSCF1730.jpg',
  'images/photos/IMG_0577.jpeg',
  'images/photos/IMG_1164.jpeg',
  'images/photos/IMG_1183.jpeg',
  'images/photos/IMG_1344.jpeg'
];

let showingAll = false;

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize and render photos
function initPhotos() {
  const gallery = document.getElementById('photo-gallery');
  const shuffledPhotos = shuffleArray(allPhotos);

  shuffledPhotos.forEach((photo) => {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo-item';
    photoDiv.style.cssText = 'break-inside: avoid; margin-bottom: 15px; position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; transition: opacity 0.3s ease;';

    photoDiv.onclick = function() { openImageModal(this); };

    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Photography';
    img.style.cssText = 'width: 100%; display: block; transition: transform 0.3s;';
    img.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
    img.onmouseout = function() { this.style.transform = 'scale(1)'; };

    photoDiv.appendChild(img);
    gallery.appendChild(photoDiv);
  });

  // Add button hover effects
  const toggleBtn = document.getElementById('toggle-photos-btn');
  toggleBtn.onmouseover = function() {
    this.style.color = '#333';
  };
  toggleBtn.onmouseout = function() {
    this.style.color = '#666';
  };
}

// Toggle show all/less photos
function toggleAllPhotos() {
  const container = document.getElementById('photo-gallery-container');
  const fadeOverlay = document.getElementById('photo-fade-overlay');
  const toggleBtn = document.getElementById('toggle-photos-btn');

  showingAll = !showingAll;

  if (showingAll) {
    container.style.maxHeight = 'none';
    fadeOverlay.style.opacity = '0';
    toggleBtn.innerHTML = 'Show Less ‹';
  } else {
    container.style.maxHeight = '700px';
    fadeOverlay.style.opacity = '1';
    toggleBtn.innerHTML = 'Show All Photos ›';
  }
}

// Initialize photos on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPhotos);
} else {
  initPhotos();
}
</script>

</details>

<style>
/* Pinterest-style masonry layout - responsive */
@media (max-width: 768px) {
  #photo-gallery {
    column-count: 2 !important;
  }
}

@media (max-width: 480px) {
  #photo-gallery {
    column-count: 1 !important;
  }
}

/* Details/Summary styling */
details > summary {
  outline: none;
  position: relative;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::before {
  content: '›';
  display: inline-block;
  font-size: 1.2em;
  margin-right: 0.3em;
  transition: transform 0.2s ease;
  color: #666;
}

details[open] > summary::before {
  transform: rotate(90deg);
}

details > summary:hover::before {
  color: #333;
}
</style>

<!-- Image Modal for fullscreen view -->
<div id="imageModal" style="display: none; position: fixed; z-index: 99999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0); opacity: 0; transition: opacity 0.3s ease, background-color 0.3s ease;" onclick="closeImageModal()">
  <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; padding: 80px 40px 40px 40px; box-sizing: border-box; position: relative;">
    <span style="position: absolute; top: 20px; right: 20px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer; transition: transform 0.2s ease; z-index: 100000; line-height: 1;" onclick="closeImageModal()" onmouseover="this.style.transform='rotate(90deg)'" onmouseout="this.style.transform='rotate(0deg)'">&times;</span>
    <img id="modalImage" style="max-width: 100%; max-height: 100%; object-fit: contain; transform: scale(0.8); transition: transform 0.3s ease;">
  </div>
</div>

<script>
function openImageModal(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var img = element.querySelector("img");

  modal.style.display = "block";
  modalImg.src = img.src;

  // Trigger animation after a small delay
  setTimeout(function() {
    modal.style.opacity = "1";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modalImg.style.transform = "scale(1)";
  }, 10);
}

function closeImageModal() {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.opacity = "0";
  modal.style.backgroundColor = "rgba(0,0,0,0)";
  modalImg.style.transform = "scale(0.8)";

  // Wait for animation to complete before hiding
  setTimeout(function() {
    modal.style.display = "none";
  }, 300);
}

// Close modal when ESC key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeImageModal();
  }
});
</script>
