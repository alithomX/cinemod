        /* ============ داده‌ها: تصاویر مودها ============ */
        const tempMoodImage = "https://uploadkon.ir/uploads/3d4128_26Cozy-Gamer’s-Good-Things-Take-Time.png";
        const tempMoodImage2 = "https://uploadkon.ir/uploads/3d4128_26Melancholy-Twilight-on-the-Rooftop.png";
        const tempMoodImage3 = "https://uploadkon.ir/uploads/3d4128_26Midnight-Gaming-Rage.png";
        const tempMoodImage4 = "https://uploadkon.ir/uploads/70ac28_26Shocked-gamer-in-a-cosy-bedroom.png";
        const tempMoodImage5 = "https://uploadkon.ir/uploads/3d4128_26Quiet-Wait-at-Dusk.png";

        /* ============ داده‌ها: مودها ============ */
        const moodsData = [
            { id: "happy", label: "شاد", desc: "یه فیلم پرانرژی می‌خوام", imageSrc: tempMoodImage, imageClass: "mood-img-happy", tint: "rgba(245, 158, 11, 0.22)", tint2: "rgba(245, 158, 11, 0.10)" },
            { id: "sad", label: "غمگین", desc: "یه فیلم آرامش‌بخش می‌خوام", imageSrc: tempMoodImage2, imageClass: "mood-img-sad", tint: "rgba(59, 130, 246, 0.22)", tint2: "rgba(59, 130, 246, 0.10)" },
            { id: "angry", label: "عصبانی", desc: "یه چیزی برای تخلیه انرژی", imageSrc: tempMoodImage3, imageClass: "mood-img-angry", tint: "rgba(239, 68, 68, 0.22)", tint2: "rgba(239, 68, 68, 0.10)" },
            { id: "surprised", label: "متعجب", desc: "یه فیلم غیرقابل‌پیش‌بینی می‌خوام", imageSrc: tempMoodImage4, imageClass: "mood-img-surprised", tint: "rgba(168, 85, 247, 0.22)", tint2: "rgba(168, 85, 247, 0.10)" },
            { id: "neutral", label: "خنثی", desc: "یه انتخاب مطمئن می‌خوام", imageSrc: tempMoodImage5, imageClass: "mood-img-neutral", tint: "rgba(156, 163, 175, 0.22)", tint2: "rgba(156, 163, 175, 0.10)" }
        ];

        /* ============ داده‌ها: فیلم‌ها به تفکیک مود ============ */
        const moviesByMood = {
            happy: [
                { title: "The Grand Budapest Hotel", year: 2014, genres: ["کمدی", "ماجراجویی", "عاشقانه"], description: "ماجراجویی جذاب و رنگارنگ یک کنیرژ وفادار در یک هتل افسانه‌ای.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt2278388-2014-203x300.jpg", link: "https://cinamatic.top/2026/06/30/the-grand-budapest-hotel-2014/" },
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
                { title: "Mad Max: Fury Road", year: 2015, genres: ["اکشن", "علمی‌تخیلی", "ماجراجویی"], description: "در یک بیابان پساآخرالزمانی، یک شورشی تلاش می‌کند فرار کند.", poster: "https://cinamatic.top/wp-content/uploads/2025/05/tt1392190-2015.jpg", link: "https://cinamatic.top/2026/03/17/mad-max-fury-road-2015/" },
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

        /* ============ داده‌ها: گالری و فیلترها ============ */
        const galleryMovies = [...moviesByMood.happy, ...moviesByMood.sad, ...moviesByMood.angry, ...moviesByMood.surprised, ...moviesByMood.neutral];
        const galleryGenres = ["all", "کمدی", "درام", "اکشن"];
        const galleryGenreLabels = { all: "همه ژانرها", "کمدی": "کمدی", "درام": "درام", "اکشن": "اکشن" };

        /* ============ STATE ============ */
        let selectedMood = null;
        let currentGalleryFilter = "all";

        /* ============ DOM REFS ============ */
        const heroSection = document.getElementById('home');
        const moodSelector = document.getElementById('moodSelector');
        const findMovieBtn = document.getElementById('findMovieBtn');
        const recommendationSection = document.getElementById('recommendation');
        const recommendationList = document.getElementById('recommendationList');
        const selectedMoodText = document.getElementById('selectedMoodText');
        const changeMoodBtn = document.getElementById('changeMoodBtn');
        const galleryList = document.getElementById('galleryList');
        const galleryFilterDropdown = document.getElementById('galleryFilterDropdown');
        const filterTrigger = document.getElementById('filterTrigger');
        const filterTriggerText = document.getElementById('filterTriggerText');
        const filterMenu = document.getElementById('filterMenu');
        const siteHeader = document.getElementById('siteHeader');
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');

        /* ============ INIT ============ */
        function init() {
            renderMoodCards();
            renderGalleryFilters();
            setupEventListeners();
            renderGallery('all');
            setupScrollEffects();
            setupRevealAnimations();
        }

        /* ============ رندر کارت‌های مود ============ */
        function renderMoodCards() {
            moodSelector.innerHTML = '';
            moodsData.forEach((mood, index) => {
                const card = document.createElement('button');
                card.className = 'mood-card';
                card.dataset.mood = mood.id;
                card.setAttribute('aria-label', `انتخاب حالت ${mood.label}`);
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.animation = `cardReveal 0.55s var(--ease-out) ${0.1 + index * 0.08}s forwards`;
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

        /* ============ رندر گزینه‌های کشوی فیلتر ============ */
        function renderGalleryFilters() {
            filterMenu.innerHTML = '';
            galleryGenres.forEach(genre => {
                const label = galleryGenreLabels[genre] || genre;
                const li = document.createElement('li');
                li.className = 'filter-option' + (genre === currentGalleryFilter ? ' selected' : '');
                li.dataset.genre = genre;
                li.setAttribute('role', 'option');
                li.setAttribute('aria-selected', genre === currentGalleryFilter ? 'true' : 'false');
                li.textContent = label;
                li.addEventListener('click', () => {
                    currentGalleryFilter = genre;
                    filterTriggerText.textContent = label;
                    filterMenu.querySelectorAll('.filter-option').forEach(o => {
                        o.classList.remove('selected');
                        o.setAttribute('aria-selected', 'false');
                    });
                    li.classList.add('selected');
                    li.setAttribute('aria-selected', 'true');
                    renderGallery(genre);
                    closeFilterMenu();
                });
                filterMenu.appendChild(li);
            });
        }

        /* ============ باز/بستن کشوی فیلتر ============ */
        function openFilterMenu() {
            filterMenu.classList.add('open');
            filterTrigger.setAttribute('aria-expanded', 'true');
        }
        function closeFilterMenu() {
            filterMenu.classList.remove('open');
            filterTrigger.setAttribute('aria-expanded', 'false');
        }
        function toggleFilterMenu() {
            if (filterMenu.classList.contains('open')) closeFilterMenu();
            else openFilterMenu();
        }

        /* ============ ساخت کارت فیلم ============ */
        function createMovieCard(movie, index = 0) {
            const card = document.createElement('article');
            card.className = 'movie-card';
            card.style.animationDelay = `${0.05 + index * 0.06}s`;
            const genreTagsHTML = movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');
            const linkStart = movie.link ? `<a href="${movie.link}" target="_blank" rel="noopener noreferrer" class="movie-poster-link">` : `<div class="movie-poster-link">`;
            const linkEnd = movie.link ? `</a>` : `</div>`;

            card.innerHTML = `
                ${linkStart}
                    <div class="movie-poster-container">
                        <img src="${movie.poster}" alt="پوستر فیلم ${movie.title}" class="movie-poster" loading="lazy">
                        <span class="year-badge">${movie.year}</span>
                        <div class="movie-genre-overlay">
                            <div class="genre-tags">${genreTagsHTML}</div>
                        </div>
                    </div>
                ${linkEnd}
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `;

            /* رفع باگ: بعد از کلیک روی لینک، فوکوس رو بردار تا لایه ژانر نمونه */
            const posterLink = card.querySelector('.movie-poster-link');
            if (posterLink && posterLink.tagName === 'A') {
                posterLink.addEventListener('click', () => {
                    setTimeout(() => posterLink.blur(), 0);
                });
            }

            return card;
        }

        /* ============ رندر پیشنهادها بر اساس مود ============ */
        function renderRecommendations() {
            if (!selectedMood) return;
            const movies = moviesByMood[selectedMood];
            const moodInfo = moodsData.find(m => m.id === selectedMood);
            selectedMoodText.textContent = moodInfo.label;
            recommendationList.innerHTML = '';
            movies.forEach((movie, i) => recommendationList.appendChild(createMovieCard(movie, i)));
            recommendationSection.classList.remove('hidden');
            setTimeout(() => {
                recommendationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        /* ============ رندر گالری با فیلتر ============ */
        function renderGallery(filter) {
            galleryList.innerHTML = '';
            const filteredMovies = filter === 'all' ? galleryMovies : galleryMovies.filter(movie => movie.genres.includes(filter));
            filteredMovies.forEach((movie, i) => galleryList.appendChild(createMovieCard(movie, i)));
        }

        /* ============ اتصال رویدادها ============ */
        function setupEventListeners() {
            moodSelector.addEventListener('click', handleMoodSelection);
            findMovieBtn.addEventListener('click', renderRecommendations);
            changeMoodBtn.addEventListener('click', resetMoodSelection);

            /* منوی همبرگری */
            mobileMenuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => mainNav.classList.remove('open'));
            });

            /* کشوی فیلتر */
            filterTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFilterMenu();
            });
            document.addEventListener('click', (e) => {
                if (!galleryFilterDropdown.contains(e.target)) closeFilterMenu();
            });

            /* بستن منوها با Esc */
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeFilterMenu();
                    mainNav.classList.remove('open');
                }
            });

            /* بستن منوی موبایل با کلیک بیرون */
            document.addEventListener('click', (e) => {
                if (
                    mainNav.classList.contains('open') &&
                    !mainNav.contains(e.target) &&
                    !mobileMenuBtn.contains(e.target)
                ) {
                    mainNav.classList.remove('open');
                }
            });
        }

        /* ============ انتخاب مود ============ */
        function handleMoodSelection(e) {
            const card = e.target.closest('.mood-card');
            if (!card) return;

            selectedMood = card.dataset.mood;
            const moodInfo = moodsData.find(m => m.id === selectedMood);

            document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            findMovieBtn.disabled = false;

            /* تغییر رنگ هاله محیطی بر اساس مود */
            if (moodInfo && moodInfo.tint) {
                heroSection.style.setProperty('--ambient-color', moodInfo.tint);
                heroSection.style.setProperty('--ambient-color-2', moodInfo.tint2 || moodInfo.tint);
            }

            /* در موبایل، اسکرول به دکمه «پیدا کن» */
            if (window.matchMedia('(max-width: 768px)').matches) {
                setTimeout(() => {
                    findMovieBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            }
        }

        /* ============ ریست انتخاب مود ============ */
        function resetMoodSelection() {
            selectedMood = null;
            document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
            findMovieBtn.disabled = true;
            recommendationSection.classList.add('hidden');

            /* برگشت هاله محیطی به سبز پیش‌فرض */
            heroSection.style.setProperty('--ambient-color', 'rgba(150, 242, 7, 0.10)');
            heroSection.style.setProperty('--ambient-color-2', 'rgba(150, 242, 7, 0.05)');

            document.getElementById('home').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        /* ============ افکت‌های اسکرول (هدر و دکمه بالا) ============ */
        function setupScrollEffects() {
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const scrollY = window.scrollY;
                        if (scrollY > 20) siteHeader.classList.add('scrolled');
                        else siteHeader.classList.remove('scrolled');

                        if (scrollY > 500) scrollTopBtn.classList.add('visible');
                        else scrollTopBtn.classList.remove('visible');

                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        }

        /* ============ انیمیشن ورود بخش‌ها با اسکرول ============ */
        function setupRevealAnimations() {
            const revealElements = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            revealElements.forEach(el => observer.observe(el));
        }

        /* ============ اسکرول به بخش دلخواه ============ */
        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            mainNav.classList.remove('open');
        }

        /* ============ اجرا ============ */
        init();