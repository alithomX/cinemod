
        // --- DATA ---
        const tempMoodImage = "https://uploadkon.ir/uploads/45c711_26Cozy-Gamer’s-Good-Things-Take-Time.png";
        const tempMoodImage2 = "https://uploadkon.ir/uploads/6f1410_26Melancholy-Twilight-on-the-Rooftop.png";
        const tempMoodImage3 = "https://uploadkon.ir/uploads/eaa411_26Midnight-Gaming-Rage.png";
        const tempMoodImage4 = "https://uploadkon.ir/uploads/eaa411_26Shocked-gamer-in-a-cosy-bedroom.png";
        const tempMoodImage5 = "https://uploadkon.ir/uploads/eaa411_26Quiet-Wait-at-Dusk.png";

        const moodsData = [
            { id: "happy", label: "شاد", desc: "یه فیلم پرانرژی می‌خوام", imageSrc: tempMoodImage, imageClass: "mood-img-happy", tint: "rgba(245, 158, 11, 0.25)" }, /* Amber */
            { id: "sad", label: "غمگین", desc: "یه فیلم آرامش‌بخش می‌خوام", imageSrc: tempMoodImage2, imageClass: "mood-img-sad", tint: "rgba(59, 130, 246, 0.25)" }, /* Blue */
            { id: "angry", label: "عصبانی", desc: "یه چیزی برای تخلیه انرژی", imageSrc: tempMoodImage3, imageClass: "mood-img-angry", tint: "rgba(239, 68, 68, 0.25)" }, /* Red */
            { id: "surprised", label: "متعجب", desc: "یه فیلم غیرقابل‌پیش‌بینی می‌خوام", imageSrc: tempMoodImage4, imageClass: "mood-img-surprised", tint: "rgba(168, 85, 247, 0.25)" }, /* Purple */
            { id: "neutral", label: "خنثی", desc: "یه انتخاب مطمئن می‌خوام", imageSrc: tempMoodImage5, imageClass: "mood-img-neutral", tint: "rgba(156, 163, 175, 0.25)" } /* Grey */
        ];

        const moviesByMood = {
            happy: [
                { title: "The Grand Budapest Hotel", year: 2014, genres: ["کمدی", "ماجراجویی", "عاشقانه"], description: "ماجراجویی جذاب و رنگارنگ یک کنierge وفادار در یک هتل افسانه‌ای.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt2278388-2014-203x300.jpg", link: "https://cinamatic.top/2026/06/30/the-grand-budapest-hotel-2014/" },
                { title: "Amélie", year: 2001, genres: ["کمدی", "عاشقانه"], description: "دختر جوانی در پاریس که شیفته کمک به اطرافیانش است.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt0211915-2001-200x300.jpg", link: "https://cinamatic.top/2026/03/29/amelie-2001/" },
                { title: "Paddington 2", year: 2017, genres: ["کمدی", "خانوادگی", "ماجراجویی"], description: "خرس کوچولویی به نام پدینگتون تلاش می‌کند یک کتاب کمیاب بخرد.", poster: "https://cinamatic.top/wp-content/uploads/2026/03/tt4468740-2017-200x300.jpg", link: "https://cinamatic.top/2026/03/17/paddington-2-2017-%d9%be%d8%af%db%8c%d9%86%da%af%d8%aa%d9%88%d9%86-2/" }
            ],
            sad: [
                { title: "Intouchables", year: 2011, genres: ["کمدی", "درام", "زندگینامه"], description: "یک مرد ثروتمند فلج با یک جوان فقیر دوستی عجیب برقرار می‌کند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt1675434-2011-202x300.jpg", link: "https://cinamatic.top/2026/03/21/the-intouchables-2011/" },
                { title: "Little Miss Sunshine", year: 2006, genres: ["کمدی", "درام", "خانوادگی"], description: "خانواده‌ای ناکارآمد در یک سفر جاده‌ای عجیب.", poster: "https://cinamatic.top/wp-content/uploads/2026/04/tt0449059-2006-200x300.jpg", link: "https://cinamatic.top/2026/10/06/little-miss-sunshine-2006-%d9%85%db%8c%d8%b3-%d8%b3%d8%a7%d9%86-%d8%b4%d8%a7%db%8c%d9%86-%da%a9%d9%88%da%86%d9%88%d9%84%d9%88/" },
                { title: "The Pursuit of Happyness", year: 2006, genres: ["درام", "زندگینامه"], description: "پدری تلاش می‌کند سرپرستی فرزندش را حفظ کند.", poster: "https://cinamatic.top/wp-content/uploads/2025/07/tt0454921-2006-202x300.jpg", link: "https://cinamatic.top/2026/03/26/the-pursuit-of-happyness-2006/" }
            ],
            angry: [
                { title: "John Wick", year: 2014, genres: ["اکشن", "هیجان‌انگیز", "جنایی"], description: "یک قاتل بازنشسته به دنیای تاریک قاتل‌ها برمی‌گردد.", poster: "https://cinamatic.top/wp-content/uploads/2025/08/tt2911666-2014-200x300.jpg", link: "https://cinamatic.top/2025/08/13/john-wick-2014/" },
                { title: "Mad Max: Fury Road", year: 2015, genres: ["اکشن", "علمی‌تخیلی", "ماجراجویی"], description: "در یک بیابان پسارocalypse، یک شورشی تلاش می‌کند فرار کند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt1392190-2015.jpg", link: "https://cinamatic.top/2026/03/17/mad-max-fury-road-2015/" },
                { title: "Fight Club", year: 1999, genres: ["درام", "روانشناختی"], description: "یک کارمند بی‌خواب و یک صابون‌ساز شیطانی یک باشگاه تاسیس می‌کنند.", poster: "https://cinamatic.top/wp-content/uploads/2025/07/tt0137523-1999-682x1024.jpg", link: "https://cinamatic.top/2026/07/25/fight-club-1999/" }
            ],
            surprised: [
                { title: "Inception", year: 2010, genres: ["اکشن", "علمی‌تخیلی", "هیجان‌انگیز"], description: "یک دزد که اسرار شرکت‌ها را در خواب می‌رباید.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt1375666-2010-691x1024.jpg", link: "https://cinamatic.top/2025/10/29/inception-2010/" },
                { title: "The Sixth Sense", year: 1999, genres: ["درام", "ترسناک", "معمایی"], description: "پسرکی که با ارواح مرده‌ها ارتباط برقرار می‌کند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt0167404-1999.jpg", link: "https://cinamatic.top/2025/10/08/the-sixth-sense-1999/" },
                { title: "The Prestige", year: 2006, genres: ["درام", "معمایی", "هیجان‌انگیز"], description: "دو شعبده‌باز درگیر یک نبرد مرگبار می‌شوند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt0482571-2006.jpg", link: "https://cinamatic.top/2026/03/26/the-prestige-2006/" }
            ],
            neutral: [
                { title: "The Shawshank Redemption", year: 1994, genres: ["درام", "جرم"], description: "دو زندانی در طول سال‌ها پیوندی عمیق شکل می‌دهند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt0111161-1994-683x1024.jpg", link: "https://cinamatic.top/2026/04/11/the-shawshank-redemption-1994/" },
                { title: "Forrest Gump", year: 1994, genres: ["کمدی", "درام", "عاشقانه"], description: "وقایع تاریخی آمریکا از نگاه یک مرد ساده‌دل.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt0109830-1994.jpg", link: "https://cinamatic.top/2025/10/08/forrest-gump-1994/" },
                { title: "Green Book", year: 2018, genres: ["کمدی", "درام", "زندگینامه"], description: "یک راننده ایتالیایی-آمریکایی درگیر خشونت.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt6966692-2018-683x1024.jpg", link: "https://cinamatic.top/2025/10/08/green-book-2018/" }
            ]
        };

        const galleryMovies = [...moviesByMood.happy, ...moviesByMood.sad, ...moviesByMood.angry, ...moviesByMood.surprised, ...moviesByMood.neutral];

        let selectedMood = null;
        const heroSection = document.getElementById('home');
        const moodSelector = document.getElementById('moodSelector');
        const findMovieBtn = document.getElementById('findMovieBtn');
        const recommendationSection = document.getElementById('recommendation');
        const recommendationList = document.getElementById('recommendationList');
        const selectedMoodText = document.getElementById('selectedMoodText');
        const changeMoodBtn = document.getElementById('changeMoodBtn');
        const galleryList = document.getElementById('galleryList');
        const galleryFilterSelect = document.querySelector('.filter-select');

        function init() {
            renderMoodCards();
            setupEventListeners();
            renderGallery('all');
        }

        function renderMoodCards() {
            moodSelector.innerHTML = '';
            moodsData.forEach(mood => {
                const card = document.createElement('button');
                card.className = 'mood-card';
                card.dataset.mood = mood.id;
                card.setAttribute('aria-label', `انتخاب حالت ${mood.label}`);
                card.innerHTML = `
                    <div class="mood-image-container">
                        <img src="${mood.imageSrc}" alt="شخصیت ${mood.label} سینمو" class="mood-image ${mood.imageClass}">
                    </div>
                    <div class="mood-gradient-overlay"></div>
                    <div class="mood-info">
                        <h3 class="mood-label">${mood.label}</h3>
                        <p class="mood-desc">${mood.desc}</p>
                    </div>
                `;
                moodSelector.appendChild(card);
            });
        }

        function createMovieCard(movie) {
            const card = document.createElement('article');
            card.className = 'movie-card';
            const genreTagsHTML = movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');
            const linkStart = movie.link ? `<a href="${movie.link}" target="_blank" rel="noopener noreferrer" class="movie-poster-link">` : `<div class="movie-poster-link">`;
            const linkEnd = movie.link ? `</a>` : `</div>`;

            card.innerHTML = `
                ${linkStart}
                    <div class="movie-poster-container">
                        <img src="${movie.poster}" alt="پوستر فیلم ${movie.title}" class="movie-poster">
                        <div class="movie-genre-overlay">
                            <div class="genre-tags">${genreTagsHTML}</div>
                        </div>
                    </div>
                ${linkEnd}
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `;
            return card;
        }

        function renderRecommendations() {
            if (!selectedMood) return;
            const movies = moviesByMood[selectedMood];
            const moodInfo = moodsData.find(m => m.id === selectedMood);
            selectedMoodText.textContent = moodInfo.label;
            recommendationList.innerHTML = '';
            movies.forEach(movie => recommendationList.appendChild(createMovieCard(movie)));
            recommendationSection.classList.remove('hidden');
            recommendationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function renderGallery(filter) {
            galleryList.innerHTML = '';
            const filteredMovies = filter === 'all' ? galleryMovies : galleryMovies.filter(movie => movie.genres.includes(filter));
            filteredMovies.forEach(movie => galleryList.appendChild(createMovieCard(movie)));
        }

        function setupEventListeners() {
            moodSelector.addEventListener('click', handleMoodSelection);
            findMovieBtn.addEventListener('click', renderRecommendations);
            changeMoodBtn.addEventListener('click', resetMoodSelection);
            if(galleryFilterSelect) {
                galleryFilterSelect.addEventListener('change', (e) => renderGallery(e.target.value));
            }
        }

        function handleMoodSelection(e) {
            const card = e.target.closest('.mood-card');
            if (!card) return;
            
            selectedMood = card.dataset.mood;
            const moodInfo = moodsData.find(m => m.id === selectedMood);

            document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            findMovieBtn.disabled = false;
            
            // Apply Ambient Glow color
            if(moodInfo && moodInfo.tint) {
                heroSection.style.setProperty('--ambient-color', moodInfo.tint);
            }
        }

        function resetMoodSelection() {
            selectedMood = null;
            document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
            findMovieBtn.disabled = true;
            recommendationSection.classList.add('hidden');
            
            // Reset Ambient Glow to default subtle green
            heroSection.style.setProperty('--ambient-color', 'rgba(150, 242, 7, 0.08)');
            
            document.getElementById('home').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        init();
