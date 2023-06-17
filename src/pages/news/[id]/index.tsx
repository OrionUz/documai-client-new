import { newscardData } from "src/pages/home/const";
import { photoData } from "./const";
import CustomSlider from "src/components/common/slider";
import NewsCard from "src/pages/home/components/NewsCard";

function NewsIdPage() {
  return (
    <div className="newsid container">
      <div className="blur_purple" />
      <div className="blur_blue" />

      {/* <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      /> */}
      <div className="newsid-content">
        <div className="newsid-content-slider">
          <CustomSlider counts={1}>
            {photoData.map((item) => {
              return (
                <div className="newsid-content-photo">
                  <img src={item.img} alt="error img" />
                </div>
              );
            })}
          </CustomSlider>
        </div>

        <div className="newsid-content-subtitle">
          The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and
          Hawaii
        </div>
        <div className="newsid-content-text">
          «Школа дала мне очень хороший бэкграунд, я прошел обучение до корпоративного сайта за 4 месяца. Хоть я и
          проходил только курс по сайтам, я научился создавать и приложения. Конечно, пришлось немного поискать
          информацию по приложениям на сторонних источниках, но база была выстроена именно школой UPROCK. На первых
          этапах я брал за дизайн приложения 1000 $, но сейчас я работаю по часовой ставке 1000 руб. в час. До обучения
          в школе у меня не было коммерческого опыта, я пытался самостоятельно делать сайты на Тильде, но сейчас
          понимаю, что это, по большей части, были попытки копирования, я не мог создать что-то свое. Вдохновение на тот
          момент я как раз черпал в работах студентов школы, которые размещались на Behance. Поэтому другие школы по
          обучению дизайну я даже не рассматривал. Я был очень замотивирован на то, чтобы учиться максимально быстро, я
          проводил по 8 часов в день над проектами. На четвертом месяце учебы я дошел до корпоративного сайта и начал
          искать работу. Я стучался и в российские компании на hh.ru, и в компании в Ташкенте. Я искал вакансии
          исключительно для middle и senior дизайнеров, так как считал, что опыта и скилов у меня достаточно, поэтому на
          поиск работы ушло около 4 месяцев. Когда я проходил собеседование в Altek, я им показал мои этапы работы над
          проектом и выполнил ТЗ по motion-анимации логотипа. Также они оценили мое портфолио, отметили умение работать
          над структурой, навыки прототипирования. Было классно, что изначально не было масштабных задачах, что
          позволило легко влиться в рабочие процессы. Я закончил школу и решил вместо поступления Родители к такому
          решению, конечно, отнеслись скептически, Даже сейчас мое увлечение дизайном По факту, профессию и работу я
          смог получить
        </div>
      </div>
      <div className="newsid-all">
        <div className="newsid-all-title">Похожые новости</div>
        <div className="home-news">
          <CustomSlider>
            {[...newscardData, ...newscardData].map((item) => {
              return <NewsCard item={item} />;
            })}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
}

export default NewsIdPage;
