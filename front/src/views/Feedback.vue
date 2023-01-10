<template>
    <div class="wrapper">
      <main class="page section">
        <div class="page__wrapper">
          <div class="page__screen screen">
            <LinkAdress title="Обратная связь" link="/feedback"></LinkAdress>
            <section class="page__content">
              <div class="container">
                <div class="feedback">
                  <!-- <div class="more-title">
                    <h1>Обратная связь</h1>
                  </div> -->
                  <div class="feedback-inner">
                    <div class="feedback-info">
                      <div class="feedback-info-head">
                        <div class="info-head-more">
                          <a href="">
                            <img src="/images/tel.svg" alt="" />(+998) 90 577
                            37 03</a
                          >
                          <a href=""
                            ><img
                              src="/images/mail.svg"
                              alt=""
                            />xojeyli.t@exat.uz</a
                          >
                          <a href=""
                            >ЕДИНАЯ ОНЛАЙН ПЛАТФОРМА ДЛЯ РЕГИСТРАЦИИ,</a
                          >
                          <a href="">РАССМОТРЕНИЯ И МОНИТОРИНГА ОБРАЩЕНИЙ</a>
                        </div>
                        <div class="feedback-flex">
                          <div class="info-head-date">
                            <h1>Режим работы:</h1>
                            <span
                              ><img
                                src="/images/Vector (2).svg"
                                alt=""
                              />Понедельник - Суббота - с 9:00 до 18:00</span
                            >
                          </div>
                          <div class="info-head-date">
                            <h1>Адрес:</h1>
                            <span
                              ><img
                                src="/images/Vector (3).svg"
                                alt=""
                              />231300, Ходжейлинский район, ул Гарезсизлик
                              д14</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="feedback-info-footer">
                        <div class="info-footer-location">
                          <!-- КАРТА -->
                        </div>
                      </div>
                    </div>
                    <div class="feedback-complect">
                      <div class="feedback-head">
                        <img src="/images/feedback.svg" alt="" />
                        <h1>Форма обратной связи</h1>
                        <p>Задайте интересующий вас вопрос</p>

                        <p>и мы свяжимся с вами в ближайшее время</p>
                      </div>
                      <FeedbackForm/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import LinkAdress from '@/components/ui/LinkAdress.vue';
import FeedbackForm from '@/components/FeedbackView/FeedbackForm.vue';
export default{
    name: 'FeedbackView',
    components: {LinkAdress, FeedbackForm}
}
</script>