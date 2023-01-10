<template>
  <!-- Header Section -->
  <header class="header" id="header">
    <nav class="navbar container">
      <a href="" class="brand"
        ><img src="/images/value/logo.png" alt="" class="brand-logo" />
        <img src="/images/value/flag.png" alt="" class="brand-logo" />
        <p>
          <strong>ХАКИМИЯТ</strong>
          ХОДЖЕЙЛИНСКОГО РАЙОНА
        </p>
      </a>
      <input type="checkbox" name="" id="check" />
      <label class="burger" for="check"
        ><span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span
      ></label>
      <input type="checkbox" name="" id="check2" />
      <label class="burger-decs" for="check2"
        ><span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span
      ></label>

      <div class="menu" id="menu">
        <ul class="menu-inner">
          <li class="menu-item">
            <router-link to="/" class="menu-link">Главная</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/news" class="menu-link">Новости</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/opendata" class="menu-link">Открытые данные</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/documents" class="menu-link">Документы</router-link>
          </li>
          <li class="menu-item menu-link">
            <a>
              <span>О районе </span>
              <ul class="menu-link-list">
                <li>
                  <router-link to="/area" class="menu-link">Общая информация</router-link>
                </li>
                <li>
                  <router-link to="/management" class="menu-link">Руководство</router-link>
                </li>
                <li>
                  <router-link to="/deputies" class="menu-link">Народные депутаты</router-link>
                </li>
              </ul>
            </a>
          </li>
          <li class="menu-item">
            <router-link to="/feedback" class="menu-link">Обратная связь</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/more" class="menu-link">Борьба с коррупцией</router-link>
          </li>
          <ul class="social-lang">
            <li class="active"><a href="https://president.uz/uz">Ўзб</a></li>
            <li><a href="https://president.uz/oz">O'zb</a></li>
            <li><a href="https://president.uz/ru">Рус</a></li>
            <li><a href="https://president.uz/en">Eng</a></li>
          </ul>
          <ul class="social-list">
            <li>
              <a
                target="_blank"
                href="https://t.me/shmirziyoyev"
                title="Telegram"
              >
                <span>
                  <img src="/images/social/telegram.png" alt="" />
                </span>
                Telegram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/Mirziyoyev/?ref=ts&amp;fref=ts"
                title="Facebook"
              >
                <span>
                  <img src="/images/social/facebook.png" alt="" />
                </span>
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/mirziyoyev_sh/"
                title="Instagram"
              >
                <span>
                  <img src="/images/social/instagram.png" alt="" />
                </span>
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/president_uz"
                title="Twitter"
              >
                <span>
                  <img src="/images/social/twiter.png" alt="" />
                </span>
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC61Jnumjuz8NXhSuLoZD2xg"
                title="Youtube"
              >
                <span>
                  <img src="/images/social/youtube.png" alt="" />
                </span>
                Youtube
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div class="social" id="menu">
        <ul class="social-inner">
          <!-- <h2>Ўзбекистон Республикаси Президентининг расмий веб-сайти</h2> -->
          <div class="social-header">
            <ul class="social-lang">
              <li class="active"><a href="https://president.uz/uz">Ўзб</a></li>
              <li><a href="https://president.uz/oz">O'zb</a></li>
              <li><a href="https://president.uz/ru">Рус</a></li>
              <li><a href="https://president.uz/en">Eng</a></li>
            </ul>
            <!-- <p> -->
            <br />

            <!-- </p> -->
            <ul class="social-list">
              <li>
                <a
                  target="_blank"
                  href="https://t.me/shmirziyoyev"
                  title="Telegram"
                >
                  <span>
                    <img src="/images/social/telegram.png" alt="" />
                  </span>
                  Telegram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Mirziyoyev/?ref=ts&amp;fref=ts"
                  title="Facebook"
                >
                  <span>
                    <img src="/images/social/facebook.png" alt="" />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mirziyoyev_sh/"
                  title="Instagram"
                >
                  <span>
                    <img src="/images/social/instagram.png" alt="" />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/president_uz"
                  title="Twitter"
                >
                  <span>
                    <img src="/images/social/twiter.png" alt="" />
                  </span>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC61Jnumjuz8NXhSuLoZD2xg"
                  title="Youtube"
                >
                  <span>
                    <img src="/images/social/youtube.png" alt="" />
                  </span>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>