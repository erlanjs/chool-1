import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>723</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>7736</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>76</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    {/*<p style={{fontSize: media(16, 18)}}> Чоң-Алайдагы Элге билим берүүнү турмушка ашырууда*/}
                    {/*    Дароот-Коргондогу мектептин тарыхы өтө чоң. Дароот-Коргондогу алгачкы мектеп «Большевик» баштооч*/}
                    {/*    мектеби деп аталган.Мектептин атайын имараты жок болгондуктан ар кайсы жерде окушкан.1937-жылы*/}
                    {/*    ...</p>*/}
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>Алайчы уулу Саит атындагы инновациялык орто мектебинин тарыхы

                                    Чоң-Алайдагы Элге билим берүүнү турмушка ашырууда Дароот-Коргондогу мектептин тарыхы
                                    өтө чоң. Дароот-Коргондогу алгачкы мектеп «Большевик» баштооч мектеби деп
                                    аталган.Мектептин атайын имараты жок болгондуктан ар кайсы жерде окушкан.1937-жылы
                                    «Большевик» толук эмес орто мектепке айланган. Атайын мектептин имараты 1938-жылы
                                    бүткөрүлгөн. (Азыркы аскердик бөлүк) 1948-жылы мектеп «Большевик» орто мектеби деп
                                    аталды. 1952-жылы «Большевик» орто мектеби «Коммунист» орто мектеби деп аты өзгөрдү.
                                    Мектептин экинчи имараты 1968-жылы бүткөрүлгөн. (Азыркы СПТУнун окуу
                                    корпусу).1992-жылы «Коммунист» орто мектеби Алайчы уулу Саиттин ысмын алды. Азыркы
                                    окуп жаткан үч кабат 620 орундуу имарат 1988-жылы бүткөрүлгөн. Мектептин алгачкы
                                    бүтүрүүчүлөрү 1950-1951-жылы болуп, 13 окуучу бүтүрүшкөн.
                                    Алардын арасында жалгыз гана кыз бала болгон.
                                    Алар төмөкүлөр :
                                    1. Кудайбергенова Пари - Дароот-Коргон
                                    2. Муратов Кудайбак - Дарооот-Коргон
                                    3. Ынакбаев Келдибек - Кызыл-Эшме
                                    4. Таштанбеков Чалабай - Дароот-Коргон
                                    5. Апсаламов Өмүш - Дароот-Коргон
                                    6. Кожобеков Тиллабай - Кара-Тейит
                                    7. Султанов Абай - Кара-Тейит
                                    8. Ыдырысов Тилебалды - Кара-Мык
                                    9. Ысмаилов Жакып - Кара-Тейит
                                    10. Шакиров Асамидин - Кара-Мык
                                    11. Жусупов Талип - Жар-Башы
                                    12. Асамидинов Турат - Жекенди
                                    13. Паязов Самидин - Дубана айылы.

                                    Мектепти жетектеп келген директорлор:

                                    Бул мектепке 1937-1966-окуу жылына чейин төмөнкү жолдоштор мектеп директору болуп
                                    иштеген. Бул жолдоштор башка жактан келип иштешкен.

                                    Тилемишов.
                                    Ботбаев.
                                    Абдрахманов.
                                    Баяманов.
                                    Абытбеков.
                                    Акматов.
                                    Искендеров.
                                    Ал эми 1966-жылдан баштап мектеп директорлугуна жергиликтүү кадрлар иштей баштады.
                                    1. Мааткеримов Асамидин - 1966-67-жылдар
                                    2. Газыбекова Жамбы - 1967-1990-жылдар
                                    3. Алымкулов Максым - 1990-1991-жылдар
                                    4. Эгембердиев Нурамза - 1991-1995-жылдар
                                    5. Ысмаилов Абдыразак - 1995-2000-жылдар
                                    6. Бөрүбаев Апсалам - 2000-2006-жылдар
                                    7. Жайчибеков Тайирбек - 2006-2013 жылдар
                                    8. Ажиев Ниязбек - 2013-


                                    Биз сыймыктанган бүтүрүүчүлөр:

                                    1. Сулайманов Нурлан - Коомдук ишмер, илимдин кандидаты
                                    2. Азимов Курбанали - Коомдук ишмер.
                                    3. Жарматова Темиркан - Даарыгер
                                    4.Курбанбаева Патила - Дарыгер
                                    5. Мамажакыпов Анарбай - Прокурор (1974-2019
                                    6. Жумабаев Бектемир - Тарых илимдеринин доктору (1959-2013)
                                    7. Сыдыков Муратали - Техника илимдеринин кандидаты
                                    8.Саубанов Марат - Техника илимдеринин кандидаты (Россия)
                                    9. Муратов Жанибек - Медицина илимдеринин кандидаты
                                    10. Эгембердиева Салтанат - Ош шаардык дарыгери
                                    11. Маматкайымов Акмат - Тарых илимдеринин кандидаты
                                    12. Шамшиев Алайбек - Илимдин кандидаты
                                    13. Сапаев Муса - Жазуучу (публист)
                                    14. Мурзакулов Нуркул -Илимдин кандидаты
                                    Республикада жана облуста көптөгөн мектеп бүтүрүүчүлөрү ар кандай тармактарда
                                    эмгектенип жүрүшөт.
                                    Азыркы учурда мектеп эки корпустан турат. Жалпы 75 мугалим 10 агай 65 эжеке
                                    эмгектенип жатат, 723/349 окуучуну тарбиялап келүүдө. Мектеп типтүү мектептердин
                                    катарын толуктайт, 620 окуучуга ылайыкташтырылган, жылытуу системасы көмүр-электр.
                                    Материалдык техникалык базасы боюнча: 2 компьютер каанасы, мастерской, лаборатория,
                                    китепкана бар. Китеп менен камсыз болуу 76% ти түзөт. Мектептин жылуулук системасы
                                    2001-жылы капиталдык ремонттон өткөн, андан бери катардагы ремонттон өткөрүлөт.
                                    Азыркы учурдагы мектеп жетекчилери:
                                    - Мектеп директору: Ажиев Ниязбек Сайдахматович, аккредитация үчүн жооптуу (0778 268
                                    343)
                                    директордун окуу тарбия иштер боюнча орун басары: Ниматилла кызы Багдагүл, (0772 182
                                    976);
                                    директордун класстан тышкаркы иштер боюнча орун басары: Эргешов Шумкарали
                                    Камчыбекович (0778 754 538)
                                    Ата-энелер комитетинин төрайымы:Тагаева Рахат Ташмурзаевна (0775 140 571)
                                    Камкорчулар кенешинин төрайымы: Тагаева Рахат Ташмурзаевна (0775 140 571)
                                    -Билим берүү уюмунун адреси, телефону, факс,e-mail, веб-сайт; Ош облусу, Чоң-Алай
                                    району, Чоң-Алай айыл аймагы,
                                    Кыргыз Республикасы, Ош облусу, Дароот-Коргон айылы. Почта индекси 723700, телефон
                                    e-mail, azhiev_73@mail.ru
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;