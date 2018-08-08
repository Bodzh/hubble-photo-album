const images = [
    {
        source: '\"assets/img/heic0206d-314.jpg\"',
        dataSource: '\"assets/img/heic0206d-1600.jpg\"',
        responsiveSource: '\"assets/img/heic0206d-314.jpg 314, assets/img/heic0206d-448.jpg 480, assets/img/heic0206d-800.jpg.jpg 800\"',
        subtitle: '\"<h4>Hubble\'s newest camera eyes hotbed of star formation</h4><p>Hubble\'s newest camera eyes hotbed of star formation\n' +
        'A watercolour fantasyland? No. It\'s actually a photograph of the centre of the Swan Nebula, or M17, a hotbed of newly born stars wrapped in colourful blankets of glowing gas and cradled in an enormous cold, dark hydrogen cloud. This stunning picture was taken by the newly installed Advanced Camera for Surveys (ACS) aboard the NASA/ESA Hubble Space Telescope.</p>\"'
    },
    {
        source: '\"assets/img/heic0416a-314.jpg\"',
        dataSource: '\"assets/img/heic0416a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic0416a-314.jpg 314, assets/img/heic0416a-448.jpg 480, assets/img/heic0416a-800.jpg 800\"',
        subtitle: '\"<h4>Symphony of colours in the Tarantula</h4><p>The Tarantula is situated 170,000 light-years away in the Large Magellanic Cloud (LMC) in the Southern sky and is clearly visible to the naked eye as a large milky patch. Astronomers believe that this smallish irregular galaxy is currently going through a violent period in its life. It is orbiting around the Milky Way and has had several close encounters with it. It is believed that the interaction with the Milky Way has caused an episode of energetic star formation - part of which is visible as the Tarantula Nebula.</p>\"'
    },
    {
        source: '\"assets/img/heic0503a-314.jpg\"',
        dataSource: '\"assets/img/heic0503a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic0503a-314.jpg 314, assets/img/heic0503a-448.jpg 480, assets/img/heic0503a-800.jpg 800\"',
        subtitle: '\"<h4>Light continues to echo three years after stellar outburst</h4><p>The Hubble Space Telescope\'s latest image of the star V838 Monocerotis (V838 Mon) reveals dramatic changes in the illumination of surrounding dusty cloud structures. The effect, called a light echo, has been unveiling never-before-seen dust patterns ever since the star suddenly brightened for several weeks in early 2002.</p>\"'
    }
    ,

    {
        source: '\"assets/img/heic0506a-314.jpg\"',
        dataSource: '\"assets/img/heic0506a-800.jpg\"',
        responsiveSource: '\"assets/img/heic0506a-314.jpg 350, assets/img/heic0506a-448.jpg 480, assets/img/heic0506a-800.jpg 800\"',
        subtitle: '\"<h4>Out of this whirl: The Whirlpool Galaxy (M51) and companion galaxy</h4><p>The graceful, winding arms of the majestic spiral galaxy M51 (NGC 5194) appear like a grand spiral staircase sweeping through space. They are actually long lanes of stars and gas laced with dust.\n' +
        '\n' +
        'This sharpest-ever image, taken in January 2005 with the Advanced Camera for Surveys aboard the NASA/ESA Hubble Space Telescope, illustrates a spiral galaxy\'s grand design, from its curving spiral arms, where young stars reside, to its yellowish central core, a home of older stars. The galaxy is nicknamed the Whirlpool because of its swirling structure.\n</p>\"'
    },

    {
        source: '\"assets/img/heic0910e-314.jpg\"',
        dataSource: '\"assets/img/heic0910e-800.jpg\"',
        responsiveSource: '\"assets/img/heic0910e-314.jpg 350, assets/img/heic0910e-448.jpg 480, assets/img/heic0910e-800.jpg 800\"',
        subtitle: '\"<h4>Hubble\'s newest camera eyes hotbed of star formation</h4><p>A watercolour fantasyland? No. It\'s actually a photograph of the centre of the Swan Nebula, or M17, a hotbed of newly born stars wrapped in colourful blankets of glowing gas and cradled in an enormous cold, dark hydrogen cloud. This stunning picture was taken by the newly installed Advanced Camera for Surveys (ACS) aboard the NASA/ESA Hubble Space Telescope.</p>\"'
    },
    {
        source: '\"assets/img/heic0910f-314.jpg\"',
        dataSource: '\"assets/img/heic0910f-1600.jpg\"',
        responsiveSource: '\"assets/img/heic0910f-314.jpg 350, assets/img/heic0910f-448.jpg 480, assets/img/heic0910f-800.jpg 800\"',
        subtitle: '\"<h4>WFC3 infrared image of Carina Nebula</h4><p>Composed of gas and dust, the pictured pillar resides in a tempestuous stellar nursery called the Carina Nebula, located 7500 light-years away in the southern constellation of Carina.\n' +
        'Taken in infrared light, the image shows the dense column and the surrounding greenish-coloured gas all but disappear. Only a faint outline of the pillar remains. By penetrating the wall of gas and dust, the infrared vision of WFC3 reveals the infant star that is probably blasting the jet. Part of the jet nearest the star is more prominent in this view. These features can be seen because infrared light, unlike visible light, can pass through the dust.</p>\"'
    },
    {
        source: '\"assets/img/heic0910h-314.jpg\"',
        dataSource: '\"assets/img/heic0910h-1600.jpg\"',
        responsiveSource: '\"assets/img/heic0910h-314.jpg 350, assets/img/heic0910h-448.jpg 480, assets/img/heic0910h-800.jpg 800\"',
        subtitle: '\"<h4>Butterfly emerges from stellar demise in planetary nebula NGC 6302</h4><p>This celestial object looks like a delicate butterfly. But it is far from serene. What resemble dainty butterfly wings are actually roiling cauldrons of gas heated to nearly 20 000 degrees Celsius. The gas is tearing across space at more than 950 000 kilometres per hour — fast enough to travel from Earth to the Moon in 24 minutes!</p>\"'
    },
    {
        source: '\"assets/img/heic1107a-314.jpg\"',
        dataSource: '\"assets/img/heic1107a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1107a-314.jpg 350, assets/img/heic1107a-448.jpg 480, assets/img/heic1107a-800.jpg 800\"',
        subtitle: '\"<h4>A rose made of galaxies</h4><p>The distorted shape of the larger of the two galaxies shows signs of tidal interactions with the smaller of the two. It is thought that the smaller galaxy has actually passed through the larger one</p>\"'
    },
    {
        source: '\"assets/img/heic1202a-314.jpg\"',
        dataSource: '\"assets/img/heic1202a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1202a-314.jpg 350, assets/img/heic1202a-448.jpg 480, assets/img/heic1202a-800.jpg 800\"',
        subtitle: '\"<h4>Hubble image of NGC 1073</h4><p>The NASA/ESA Hubble Space Telescope has taken a picture of the barred spiral galaxy NGC 1073, which is found in the constellation of Cetus (The Sea Monster). Our own galaxy, the Milky Way, is thought to be a similar barred spiral, and the study of galaxies such as NGC 1073 can help astronomers learn more about our celestial home.</p>\"'
    },
    {
        source: '\"assets/img/heic1509c-314.jpg\"',
        dataSource: '\"assets/img/heic1509c-800.jpg\"',
        responsiveSource: '\"assets/img/heic1509c-314.jpg 350, assets/img/heic1509c-448.jpg 480, assets/img/heic1509c-800.jpg 800\"',
        subtitle: '\"<h4>The star cluster Westerlund 2</h4><p>This image shows the sparkling centerpiece of Hubble\'s 25th anniversary tribute. Westerlund 2 is a giant cluster of about 3000 stars located 20 000 light-years away in the constellation Carina. Hubble\'s near-infrared imaging camera pierces through the dusty veil enshrouding the stellar nursery, giving astronomers a clear view of the dense concentration of stars in the central cluster.</p>\"'
    },
    {
        source: '\"assets/img/heic1509f-314.jpg\"',
        dataSource: '\"assets/img/heic1509f-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1509f-314.jpg 350, assets/img/heic1509f-448.jpg 480, assets/img/heic1509f-800.jpg 800\"',
        subtitle: '\"<h4>New stars around Westerlund 2</h4><p>The red dots scattered throughout the cosmic landscape captured in this NASA/ESA Hubble Space Telescope image are a rich population of forming stars that are still wrapped in their gas and dust cocoons. These stellar foetuses have not yet ignited the hydrogen in their cores to light-up as stars. However, Hubble’s near-infrared vision allows astronomers to identify these fledglings. The brilliant blue stars seen throughout the image are mostly in the foreground.</p>\"'
    },
    {
        source: '\"assets/img/heic1518a-314.jpg\"',
        dataSource: '\"assets/img/heic1518a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1518a-314.jpg 350, assets/img/heic1518a-448.jpg 480, assets/img/heic1518a-800.jpg 800\"',
        subtitle: '\"<h4>The Twin Jet Nebula</h4><p>The Twin Jet Nebula, or PN M2-9, is a striking example of a bipolar planetary nebula. Bipolar planetary nebulae are formed when the central object is not a single star, but a binary system, Studies have shown that the nebula’s size increases with time, and measurements of this rate of increase suggest that the stellar outburst that formed the lobes occurred just 1200 years ago.</p>\"'
    },
    {
        source: '\"assets/img/heic1520a-314.jpg\"',
        dataSource: '\"assets/img/heic1520a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1520a-314.jpg 350, assets/img/heic1520a-448.jpg 480, assets/img/heic1520a-800.jpg 800\"',
        subtitle: '\"<h4>Revisiting the Veil Nebula</h4><p>This image shows a small section of the Veil Nebula, as it was observed by the NASA/ESA Hubble Space Telescope. This section of the outer shell of the famous supernova remnant is in a region known as NGC 6960 or — more colloquially — the Witch’s Broom Nebula.</p>\"'
    },
    {
        source: '\"assets/img/heic1522a-314.jpg\"',
        dataSource: '\"assets/img/heic1522a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1522a-314.jpg 350, assets/img/heic1522a-448.jpg 480, assets/img/heic1522a-800.jpg 800\"',
        subtitle: '\"<h4>Jupiter at a glance</h4><p>This new image from the largest planet in the Solar System, Jupiter, was made during the Outer Planet Atmospheres Legacy (OPAL) programme. The images from this programme make it possible to determine the speeds of Jupiter’s winds, to identify different phenomena in its atmosphere and to track changes in its most famous features.</p>\"'
    },
    {
        source: '\"assets/img/heic1608a-314.jpg\"',
        dataSource: '\"assets/img/heic1608a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1608a-314.jpg 350, assets/img/heic1608a-448.jpg 480, assets/img/heic1608a-800.jpg 800\"',
        subtitle: '\"<h4>The Bubble Nebula</h4><p>The Bubble Nebula, also known as NGC 7635, is an emission nebula located 8 000 light-years away. This stunning new image was observed by the NASA/ESA Hubble Space Telescope to celebrate its 26th year in space.</p>\"'
    },
    {
        source: '\"assets/img/heic1814b-314.jpg\"',
        dataSource: '\"assets/img/heic1814b-1600.jpg\"',
        responsiveSource: '\"assets/img/heic1814b-314.jpg 350, assets/img/heic1814b-448.jpg 480, assets/img/heic1814b-800.jpg 800\"',
        subtitle: '\"<h4>Saturn and its rings in 2018</h4><p>The NASA/ESA Hubble Space Telescope was used to observe the planet on 6 June 2018, when Saturn was approximately 1.4 billion kilometres from Earth. Visible in this Hubble image are the classic rings as recorded by the very first astronomers to observe the planet with telescopes. From the outside in are the A ring with the Encke Gap, the Cassini Division, the B ring, and the C ring with the Maxwell Gap.</p>\"'
    },
    {
        source: '\"assets/img/heic9910a-314.jpg\"',
        dataSource: '\"assets/img/heic9910a-1600.jpg\"',
        responsiveSource: '\"assets/img/heic9910a-314.jpg 350, assets/img/heic9910a-448.jpg 480, assets/img/heic9910a-800.jpg 800\"',
        subtitle: '\"<h4>The Eskimo Nebula</h4><p>In its first glimpse of the heavens following the successful December 1999 servicing mission, the NASA/ESA Hubble Space Telescope has captured a majestic view of a planetary nebula, the glowing remains of a dying, Sun-like star.</p>\"'
    },
    {
        source: '\"assets/img/opo0214a-314.jpg\"',
        dataSource: '\"assets/img/opo0214a-1600.jpg\"',
        responsiveSource: '\"assets/img/opo0214a-314.jpg 350, assets/img/opo0214a-448.jpg 480, assets/img/opo0214a-800.jpg 800\"',
        subtitle: '\"<h4>IC beauty</h4><p>The Hubble telescope reveals a rainbow of colours in this dying star, called IC 4406. Like many other so-called planetary nebulae, IC 4406 exhibits a high degree of symmetry. The nebula\'s left and right halves are nearly mirror images of the other. If we could fly around IC 4406 in a spaceship, we would see that the gas and dust form a vast donut of material streaming outward from the dying star. We don\'t see the donut shape in this photograph because we are viewing IC 4406 from the Earth-orbiting Hubble telescope. From this vantage point, we are seeing the side of the donut.</p>\"'
    },
    {
        source: '\"assets/img/opo1335a-314.jpg\"',
        dataSource: '\"assets/img/opo1335a-1600.jpg\"',
        responsiveSource: '\"assets/img/opo1335a-314.jpg 350, assets/img/opo1335a-448.jpg 480, assets/img/opo1335a-800.jpg 800\"',
        subtitle: '\"<h4>Hubble sees a cosmic caterpillar</h4><p>This light-year-long knot of interstellar gas and dust resembles a caterpillar on its way to a feast. But the meat of the story is not only what this cosmic caterpillar eats for lunch, but also what\'s eating it. Harsh winds from extremely bright stars are blasting ultraviolet radiation at this wanna-be star and sculpting the gas and dust into its long shape.</p>\"'
    },
    {
        source: '\"assets/img/opo9607a-314.jpg\"',
        dataSource: '\"assets/img/opo9607a-1600.jpg\"',
        responsiveSource: '\"assets/img/opo9607a-314.jpg 350, assets/img/opo9607a-448.jpg 480, assets/img/opo9607a-800.jpg 800\"',
        subtitle: '\"<h4>The Hourglass Nebula</h4><p>This is an image of MyCn18, a young planetary nebula located about 8,000 light-years away, taken with the Wide Field and Planetary Camera 2 (WFPC2) aboard the Hubble Space Telescope (HST). This Hubble image reveals the true shape of MyCn18 to be an hourglass with an intricate pattern of \'etchings\' in its walls. This picture has been composed from three separate images taken in the light of ionized nitrogen (represented by red), hydrogen (green), and doubly-ionized oxygen (blue).</p>\"'
    }
];
let imageHtml = '';

$(document).ready(function () {
    for (let i in images) {
        imageHtml = '  <li class="col-xs-6 col-sm-4 col-md-3" ' + ' data-responsive=' + images[i].responsiveSource + ' data-src=' + images[i].dataSource + ' data-sub-html=' + images[i].subtitle + '>' +
            ' <a href=""> <img class="img-responsive"' + ' src= ' + images[i].source + '>' + '</a></li>';
        console.log(imageHtml);

        loadImage();
    }
    $("#lightgallery").lightGallery();
});

function loadImage() {
    $('ul').append(imageHtml);
    imageHtml = '';
}
