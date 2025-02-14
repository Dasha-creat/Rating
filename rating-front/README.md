# Описание проекта
Система позволяет отслеживать успеваемость студентов и групп, управлять их оценками и анализировать данные в различных областях:
- У одного студента за два разных периода и одинаковый набор предметов.
- У двух студентов за одинаковый период и набор предметов.

# Стек технологий
Стек технологий включает в себя React, TypeScript, Vite. 
Основные зависимости:
- React и React-DOM: основная библиотека для создания компонентов пользовательского интерфейса.
- React-Router-DOM: для работы с маршрутизацией.
- Chart.js и React-ChartJS-2: для построения диаграмм.
- Axios: HTTP-клиент для взаимодействия с API.
- Date-FNS: библиотека для работы с датами.
- PostCSS и Autoprefixer: для обработки стилей.

# Чтобы запустить проект:
1. cd .\Rating\rating-front\
2. npm install
3. npm run dev
4. в конце адреса написать "/main"

# Использование
В проекте доступно несколько функций для использования. При переходе на страницу, пользователь видит три кнопки:
- "Выбрать студента"
- "Выбрать группу"
- "Сравнить рейтинги"

### При нажатии кнопки "Выбрать студента"
Выпадет список всех студентов, поскольку у студентов отображается их внутрений id, для удобства есть поисковая строка, куда нужно написать Фамилию желаемого студена. При клике на студента, будет отображена новая страница. 
<br>Для того, чтобы увидеть рейтинг нужно выбрать как минимум 3 предмета, но не больше 8. Если пользователя интересует рейтинг студента за сегодняшний день, то он может не выбирать период. Справа отображено окно, в котором видно выбранные предметы и период. Если же пользователя интересует какой-то конкретный промежуток времени, он может кликнуть на кнопку "Выбрать период" и, в появившимся календаре, выбрать его. 
<br>После выбора всех нужных данных, пользователь должен нажать кнопку "Вывод". Справа от виджета с кнопками будет отобржен графиик, показывающий оценки. Если пользователь наведет курсор на вершины графика, то сможет увидеть суммарный балл по предмету. 
<br>Снизу появится таблица, где будут видны оценки за каждый выбранный день из периода. Для того чтобы изменить оценку или записать новую, пользователь должен нажать на ячейку и записать балл. График автоматически изменится. 
<br>Для того, чтобы вернуться на главную страницу нужно нажать кнопку "Верунться назад".

### При нажатии кнопки "Выбрать группу"
<br>Выпадет список всех групп. При клике на группу, будет отображена новая страница. Выбор данных такой же, как и при выборе данных для студента (см. выше). 
<br>После нажатия кнопки "Вывод", справа от виджета с кнопками будет отображен график. График будет отображать общий балл по группе, по выбранным критериям. Если пользователь наведет курсор на вершины графика, то сможет увидеть суммарный балл по предмету. 
<br>Для того, чтобы вернуться на главную страницу нужно нажать кнопку "Верунться назад".

### При нажатии кнопки "Сравнить рейтинги"
Отображается новая страница. 
<br>В первом виджете выбора данных будет отображена разница рейтингов у двух студентов по одинаковым предметам и периоду. 
<br>Для того чтобы выбрать двух студентов, нужно нажать кнопку "Выбрать студентов". После появится список, в поисковой строке, так же можно будет указать Фамилии интересующих студентов по очереди. После выбор данных такой же, как и при выборе данных для одного студента (см. выше). Единственное, чтобы поменять выбранного студента, нужно еще раз кликнуть на него и выбрать нового.
<br>После нажатия кнопки "Вывод" будет отображен график, в котором будет два отрисованных рейтинга. Для каждого студента будет свой цвет. Сверху будет видно, какого цвета график у каждого студента. Если пользователь наведет курсор на вершины графика, то сможет увидеть суммарный балл по предмету для каждого студента отдельно. Кроме того, пользователь может нажать на студента сверху от графика, после чего его показатели будут убраны с графика, таким же способом он сможет вернуть значения обратно. 
<br>Во втором виджете выбора данных будет отображена разница рейтинга у одного студента, но за разный период. 
<br>Выбор студента и выбор предметов такой же как и при выборе данных студента (см. выше). Однако теперь есть две кнопки выбора периода, изначально оба периода принимают значения сегодняшнего дня. В целом выбор периода такой же, как и в отсальных частях проекта (см. выше). 
<br>После нажатия кнопки "Вывод" будет виден график, где показатели каждого цвета относятся к разным периодам. Они также будут указаны сверху от графика. В остальнои функционал такой же, как и в виджете рейтинга у двух студентов (см. выше).
<br>Для того, чтобы вернуться на главную страницу нужно нажать кнопку "Верунться назад".

# Основные данные
Ссылка на api сервера находится в Frontend/Rating/rating-front/src/shared/config
<br>Все страницы расположены в Frontend/Rating/rating-front/src/pages

# Структура проекта
Проект построен на FSD-архитектуре и имеит слои:
- App
- Pages
- Widgets
- Features
- Entities
- Shared

## App
Внутри есть папка styles, которая имеет файл с глобальными стилями index.css.
<br>Внутри providers/Router есть компонент AppRouter.tsx, который настраивает маршрутизацию приложения с использованием библиотеки react-router-dom.
<br>А также App.tsx компонент, который формирует каркас, объединяя глобальные стили, маршруты, и виджеты верхнего уровня.

## Pages
Слой pages представляет собой набор компонентов, которые отвечают за отображение конкретных страниц приложения. Это ключевые точки взаимодействия пользователя с приложением, каждая из которых строится на основе виджетов, сущностей и функций.
<br>Всего в проетке четрые страницы:
- MainPage - главная страница.
- StudentPage - страница отображения данных о конкретном студенте.
- GroupPage - страница отображения данных о группе.
- ComparePage - страница для сравнения рейтингов.

## Widgets
Слой widgets содержит компоненты, которые представляют собой самостоятельные и переиспользуемые элементы пользовательского интерфейса. Эти компоненты предназначены для объединения сущностей (entities) и функций (features) в готовые визуальные блоки, которые можно использовать на различных страницах (pages).
- Header - шапка сайта.
- Footer - нижний колонтитул.
- SelectedInfo - это виджет, который отображает выбранные пользователем элементы и выбранный временной диапазон. Принимает следующие пропсы:


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>selectedItems</td>
        <td>IElement[]</td>
        <td>Список выбранных элементов. Каждый элемент имеет свойства `id` (string) и `name` (string).</td>
    </tr>
    <tr>
        <td>dateRange</td>
        <td>[Date, Date] | null</td>
        <td>Выбранный временной диапазон.</td>
    </tr>
    <tr>
        <td>formatDateRange</td>
        <td>(dateRange: [Date, Date]) => string</td>
        <td>Функция для форматирования временного диапазона в строку.</td>
    </tr>
</table>

<br>

- SelectionControls - это виджет, предоставляющий пользователю инструменты для выбора критериев, временного диапазона и элементов сравнения. Он поддерживает два режима: для одного студента или для сравнения двух студентов. Использует следующие компоненты: SubjectSelectButton, RozaScheme, GradeCalendar, TwoStudentsSelectButton, RozaSchemeForTwo. Принимает следующие пропсы:


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>labelName (опционально)</td>
        <td>string</td>
        <td>id выбранного студента.</td>
    </tr>
    <tr>
        <td>allSubjects</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список доступных предметов.</td>
    </tr>
    <tr>
        <td>selectedSubjects</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список выбранных предметов.</td>
    </tr>
    <tr>
        <td>onSubjectChange</td>
        <td>(items: { id: string; name: string }[]) => void</td>
        <td>Обработчик изменения выбранных предметов.</td>
    </tr>
    <tr>
        <td>dateRange</td>
        <td>[Date, Date] | null</td>
        <td>Выбранный временной диапазон.</td>
    </tr>
    <tr>
        <td>onDateRangeChange</td>
        <td>(date: Date | [Date, Date] | null) => void</td>
        <td>Обработчик изменения временного диапазона.</td>
    </tr>
    <tr>
        <td>onShowTable</td>
        <td>() => void</td>
        <td>Обработчик нажатия кнопки "Вывод".</td>
    </tr>
    <tr>
        <td>gradesData</td>
        <td>{ [subjectId: string]: number }</td>
        <td>Данные оценок для одного студента.</td>
    </tr>
    <tr>
        <td>gradesForTwo (опционально)</td>
        <td>{ [studentId: string]: { [subjectId: string]: number } }</td>
        <td>Данные оценок для двух студентов.</td>
    </tr>
    <tr>
        <td>showTwoStudentsSelectButton</td>
        <td>boolean</td>
        <td>Флаг для отображения кнопки выбора двух студентов.</td>
    </tr>
    <tr>
        <td>elements (опционально)</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список доступных студентов.</td>
    </tr>
    <tr>
        <td>onStudentsChange (опционально)</td>
        <td>(students: { id: string; name: string }[]) => void</td>
        <td>Обработчик изменения списка выбранных студентов.</td>
    </tr>
</table>

<br>

- SingleStudentComparisonWidget - виджет для сравнения успеваемости одного студента в двух разных временных периодах по выбранным предметам. Использует следующие компоненты: StudentSelectButton, SubjectSelectButton, GradeCalendar, RozaSchemeForPeriods. Принимает следующие пропсы:


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>students</td>
        <td>IStudent[]</td>
        <td>Список доступных студентов.</td>
    </tr>
    <tr>
        <td>subjects</td>
        <td>ISubject[]</td>
        <td>Список доступных предметов.</td>
    </tr>
</table>


## Features
Этот слой в проекте включает в себя функциональные компоненты, которые легко переиспользовать. Эти компоненты реализуют отдельные части бизнес-логики и взаимодействия с пользователем, объединяя сущности и общие компоненты. Цель слоя — предоставлять узконаправленную функциональность, которую можно комбинировать в более крупные рабочие процессы.
- GradeCalendar (../features/Calendar) - Выпадающий календарь для выбора диапазона дат. Автоматически 
преобразует выбор одной даты в диапазон.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>value</td>
        <td>[Date, Date] | null</td>
        <td>Выбранный временной диапазон.</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>(date: [Date, Date] | null) => void</td>
        <td>Обработчик изменения временного диапазона.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>Заголовок выпадающего календаря.</td>
    </tr>
</table>

<br>

- TwoStudentsSelectButton (../features/ChoiceCompareStudents) - Выпадающий список для выбора двух студентов для сравнения.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>elements</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список доступных студентов.</td>
    </tr>
    <tr>
        <td>onStudentsChange</td>
        <td>(students: { id: string; name: string }[]) => void</td>
        <td>Обработчик изменения списка выбранных студентов.</td>
    </tr>
</table>

<br>

- GroupSelectButton (../features/ChoiceGroup) - Выпадающий список для выбора группы.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>elements</td>
        <td>{ name: string; id: number }[]</td>
        <td>Список доступных групп.</td>
    </tr>
    <tr>
        <td>onSelect</td>
        <td>(name: string, id: number) => void</td>
        <td>Обработчик выбора группы.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>Заголовок выпадающего списка групп.</td>
    </tr>
</table>

<br>

- StudentSelectButton (../features/ChoiceStudent) - Выпадающий список для выбора одного студента.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>elements</td>
        <td>{ name: string; id: string }[]</td>
        <td>Список доступных студентов.</td>
    </tr>
    <tr>
        <td>onSelect</td>
        <td>(id: string) => void</td>
        <td>Обработчик выбора студента.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>Заголовок выпадающего списка студентов.</td>
    </tr>
</table>

<br>

- SubjectSelectButton (../features/ChoiceSubject) - Выпадающий список для выбора одного или нескольких предметов.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>items</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список доступных предметов.</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>(selectedItems: { id: string; name: string }[]) => void</td>
        <td>Обработчик изменения выбранных предметов.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>Заголовок выпадающего списка предметов.</td>
    </tr>
</table>

<br>

- RozaScheme (../features/GradeScheme) - Отображает графическое представление оценок по выбранным предметам и элементам.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>gradesData</td>
        <td>{ [subjectId: string]: number }</td>
        <td>Баллы для каждого предмета.</td>
    </tr>
    <tr>
        <td>elements</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список элементов для отображения в розе.</td>
    </tr>
    <tr>
        <td>isLoading</td>
        <td>boolean</td>
        <td>Флаг, указывающий на загрузку данных.</td>
    </tr>
</table>

<br>

- RozaSchemeForTwo (../features/GradeSchemeForTwo) - Отображает сравнение баллов у двух студентов.



<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>gradesForTwo</td>
        <td>{ [studentId: string]: { [subjectId: string]: number } } | undefined</td>
        <td>Баллы для двух студентов. Ключ - id студента, значение - объект с баллами по предметам.</td>
    </tr>
    <tr>
        <td>elements</td>
        <td>IElement[]</td>
        <td>Список элементов. Каждый элемент имеет свойства `id` (string) и `name` (string).</td>
    </tr>
    <tr>
        <td>isLoading</td>
        <td>boolean</td>
        <td>Флаг загрузки.</td>
    </tr>
</table>

<br>

- RozaSchemeForPeriods (../features/GradeSchemeForPeriods) - Сравнивает баллы за два временных периода по выбранным предметам, у одного студента.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>gradesDataFirst</td>
        <td>{ [subjectId: string]: number }</td>
        <td>Баллы для первого периода. Ключ - id предмета, значение - балл.</td>
    </tr>
    <tr>
        <td>gradesDataSecond</td>
        <td>{ [subjectId: string]: number }</td>
        <td>Баллы для второго периода. Ключ - id предмета, значение - балл.</td>
    </tr>
    <tr>
        <td>elements</td>
        <td>IElement[]</td>
        <td>Список элементов. Каждый элемент имеет свойства `id` (string) и `name` (string).</td>
    </tr>
    <tr>
        <td>isLoading</td>
        <td>boolean</td>
        <td>Флаг загрузки.</td>
    </tr>
    <tr>
        <td>firstPeriodLabel</td>
        <td>string</td>
        <td>Метка для первого периода.</td>
    </tr>
    <tr>
        <td>secondPeriodLabel</td>
        <td>string</td>
        <td>Метка для второго периода.</td>
    </tr>
</table>

<br>

- Table (../features/GradeTable) - Отображает таблицу оценок по выбранным предметам и датам.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>subjects</td>
        <td>{ id: string; name: string }[]</td>
        <td>Список предметов для отображения в таблице.</td>
    </tr>
    <tr>
        <td>dates</td>
        <td>string[]</td>
        <td>Список дат для отображения в таблице.</td>
    </tr>
    <tr>
        <td>gradesData</td>
        <td>{ [subjectId: string]: { [date: string]: string | number | "" } }</td>
        <td>Баллы для каждого предмета и даты.</td>
    </tr>
    <tr>
        <td>onGradeChange</td>
        <td>(subjectId: string, date: string, newGrade: string | number | "") => void</td>
        <td>Обработчик изменения балла.</td>
    </tr>
    <tr>
        <td>visibleDates</td>
        <td>number</td>
        <td>Количество видимых дат в таблице.</td>
    </tr>
</table>

<br>

- fetchElements() (../features/MainPage) - Функция, которая получает список студентов и групп с сервера.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>setElements</td>
        <td>(students: { name: string; id: string }[]) => void</td>
        <td>Функция для обновления списка студентов.</td>
    </tr>
    <tr>
        <td>setGroups</td>
        <td>(groups: { name: string; id: number }[]) => void</td>
        <td>Функция для обновления списка групп.</td>
    </tr>
</table>

<br>

- CalendarSelectButton (../features/SelectDates) - Выпадающий календарь для выбора диапазона дат.


<table>
    <tr>
        <th>Название</th>
        <th>Тип данных</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>value</td>
        <td>[Date, Date] | null</td>
        <td>Выбранный временной диапазон.</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>(date: [Date, Date] | null) => void</td>
        <td>Обработчик изменения выбранного временного диапазона.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>Заголовок для кнопки выбора даты.</td>
    </tr>
</table>


## Entities 
Слой entities в проекте предназначен для работы с бизнес-данными и предоставляет интерфейсы для их взаимодействия. Этот слой служит мостом между данными, поступающими из внешних источников (API), и логикой приложения.
- Grade - Модуль для работы с оценками студентов, включает функции для получения, обновления и форматирования данных, а также классы для работы с сущностями.

<table>
<caption>Функции</caption>  
  <tr>  
    <th>Название</th>  
    <th>Тип данных</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td><code>formatDate</code></td>  
    <td>(date: Date) => string</td>  
    <td>Форматирует дату в строку формата YYYY-MM-DD.</td>  
  </tr>  
  <tr>  
    <td><code>getDateRangeArray</code></td>  
    <td>(startDate: Date, endDate: Date) => Date[]</td>  
    <td>Генерирует массив дат между двумя заданными датами.</td>  
  </tr>  
  <tr>  
    <td><code>fetchGradesByDateRange</code></td>  
    <td>(studentId: string, subjectIds: string[], startDate: string, endDate: string) => Promise IGradeData</td>  
    <td>Получает данные об итоговых баллах за указанный диапазон дат.</td>  
  </tr>  
  <tr>  
    <td><code>fetchGradesByDate</code></td>  
    <td>(studentId: string, subjectIds: string[], startDate: string, endDate: string) => Promise IData</td>  
    <td>Получает подробные данные об баллах для указанных дат.</td>  
  </tr>  
  <tr>  
    <td><code>updateGrade</code></td>  
    <td>(studentId: string, subjectId: string, date: string, grade: number) => Promise void </td>  
    <td>Обновляет балл для указанного студента, предмета и даты.</td>  
  </tr>  
</table> 


<br>


<table> 
<caption>Классы</caption>   
  <tr>  
    <th>Название</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`Grade`</td>  
    <td>Класс, представляющий балл с полями `id`, `ubjectId`, `studentId`, `date` и `grade`.</td>  
  </tr>  
</table> 


<br>


<table> 
<caption>Компоненты</caption>   
  <tr>  
    <th>Название</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td><code>TableCell</code></td>  
    <td>Компонент для редактирования значения в ячейке таблицы.</td>  
  </tr>  
</table>


<br>

- GradeGroup - Модуль для работы с оценками групп студентов.

<table>
<caption>Функции</caption>    
  <tr>  
    <th>Название</th>  
    <th>Тип данных</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td><code>fetchGradesByDateRangeForGroup</code></td>  
    <td>(groupId: string, subjectId: string, startDate: Date, endDate: Date) => Promise IGroupGrade[]</td>  
    <td>Получает баллы для группы за указанный временной диапазон.</td>  
  </tr>  
</table> 


<br>


<table>
<caption>Классы</caption>    
  <tr>  
    <th>Название</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`GradeGroup`</td>  
    <td>Класс, представляющий оценки группы с полями `id`, `subjectId`, `groupId` и `date`.</td>  
  </tr>  
</table> 

<br>

- Group - Модуль для работы с данными учебных групп.

<table> 
<caption>Функции</caption>   
  <tr>  
    <th>Название</th>  
    <th>Тип данных</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`fetchGroup`</td>  
    <td>(id: string) => Promise IGroup </td>  
    <td>Получает данные группы по её идентификатору.</td>  
  </tr>  
</table> 

<br>

- Student - Модуль для работы с данными студентов.

<table>  
<caption>Функции</caption>  
  <tr>  
    <th>Название</th>  
    <th>Тип данных</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`fetchStudent`</td>  
    <td>(id: string) => Promise IStudentData </td>  
    <td>Получает данные студента по его идентификатору.</td>  
  </tr>  
</table>

<br>


<table>  
<caption>Классы</caption>  
  <tr>  
    <th>Название</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`Student`</td>  
    <td>Класс, представляющий студента с полями `id` и `name`.</td>  
  </tr>  
</table>

<br>

- Subject - Модуль для работы с данными учебных предметов.

<table>  
<caption>Функции</caption>  
  <tr>  
    <th>Название</th>  
    <th>Тип данных</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`fetchSubjects`</td>  
    <td>() => Promise ISubjectData[]</td>  
    <td>Получает список всех доступных предметов.</td>  
  </tr>  
</table>  


<br>


<table>  
<caption>Классы</caption>  
  <tr>  
    <th>Название</th>  
    <th>Описание</th>  
  </tr>  
  <tr>  
    <td>`Subject`</td>  
    <td>Класс, представляющий предмет с полями `id` и `name`.</td>  
  </tr>  
</table>


## Shared
Слой shared содержит общие компоненты и хуки, которые используются в различных частях приложения. Этот слой обеспечивает повторное использование кода и упрощение архитектуры проекта.
<br>Папка hooks содержит кастомные хуки для управления состоянием и логикой:

1. useCalendarSelector - хук для работы с календарем. Функционал: 
    - Управляет диапазоном выбранных дат (dateRange).
    - Открывает/закрывает календарь (isOpen).
    - Позволяет изменять выбранный диапазон дат (handleDateChange).


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`initialRange`</td>
    <td>Array&lt;Date&gt;</td>
    <td>Начальный диапазон дат (по умолчанию [new Date(), new Date()]).</td>
  </tr>
</table>

<br>

2. useLimitDropdown - хук для работы с выпадающим списком с ограничениями. Функционал:
    - Ограничивает выбор элементов (3-8 критериев).
    - Обрабатывает ошибки, связанные с ограничениями.
    - Управляет состоянием выпадающего списка.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;IElement&gt;</td>
    <td>Массив элементов для отображения в выпадающем списке.</td>
  </tr>
  <tr>
    <td>`onChange`</td>
    <td>(selected: IElement[]) =&gt; void</td>
    <td>Функция обратного вызова для обновления выбранных элементов.</td>
  </tr>
</table>

<br>

3. useSearchDropdown - хук для работы с выпадающим списком с поиском. Функционал:
    - Фильтрует элементы по поисковому запросу.
    - Открывает/закрывает список.
    - Управляет выбранным элементом.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;IStudent&gt;</td>
    <td>Массив студентов или элементов для поиска.</td>
  </tr>
  <tr>
    <td>`property`</td>
    <td>keyof IStudent</td>
    <td>Свойство элемента, по которому будет осуществляться поиск (например, `name`).</td>
  </tr>
</table>

<br>

4. useStudentsDropdown - хук для выбора студентов. Функционал:
    - Управляет выбором до двух студентов.
    - Обрабатывает ошибки при превышении лимита.
    - Поддерживает поиск.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`onStudentsChange`</td>
    <td>(selectedStudents: { id: string; name: string }[]) =&gt; void</td>
    <td>Функция обратного вызова для обновления выбранных студентов.</td>
  </tr>
</table>

<br>

<br>Папка ui cодержит общие UI-компоненты. Эти компоненты используют логику из хуков для предоставления готовых пользовательских элементов:

1. BackButton - кнопка для возврата. Функционал:
    - Содержит текст и иконку стрелки.
    - Управляет состоянием через onClick.
    - Может быть отключена через disabled.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`children`</td>
    <td>string</td>
    <td>Текст, который будет отображаться на кнопке.</td>
  </tr>
  <tr>
    <td>`onClick`</td>
    <td>() =&gt; void</td>
    <td>Функция, которая будет вызвана при клике на кнопку.</td>
  </tr>
  <tr>
    <td>`disabled`</td>
    <td>boolean</td>
    <td>Состояние кнопки (можно заблокировать).</td>
  </tr>
</table>

<br>

2. CalendarSelectButton - кнопка с выпадающим календарем. Функционал:
    - Отображает календарь для выбора диапазона дат.
    - Поддерживает открытие/закрытие списка.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>Array&lt;Date | null&gt;</td>
    <td>Диапазон выбранных дат или null, если ничего не выбрано.</td>
  </tr>
  <tr>
    <td>`onChange`</td>
    <td>(date: [Date, Date] | null) =&gt; void</td>
    <td>Функция, которая будет вызвана при изменении диапазона дат.</td>
  </tr>
  <tr>
    <td>`title`</td>
    <td>string</td>
    <td>Заголовок кнопки, который будет отображаться.</td>
  </tr>
  <tr>
    <td>`selectRange`</td>
    <td>boolean</td>
    <td>Указывает, нужно ли выбирать диапазон дат (по умолчанию true).</td>
  </tr>
</table>

<br>

3. StudentsDropdown - выпадающий список для выбора студентов. Функционал:
    - Позволяет выбрать до двух студентов.
    - Отображает ошибки и подсказки.
    - Поддерживает поиск.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;{ id: string; name: string }&gt;</td>
    <td>Массив студентов, который отображается в выпадающем списке.</td>
  </tr>
  <tr>
    <td>`onStudentsChange`</td>
    <td>(selectedStudents: { id: string; name: string }[]) =&gt; void</td>
    <td>Функция обратного вызова для обновления выбранных студентов.</td>
  </tr>
</table>

<br>

4. GroupDropdown - выпадающий список для выбора группы. Функционал:
    - Отображает список элементов для выбора.
    - Управляет состоянием открытого/закрытого списка.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;{ name: string; id: number }&gt;</td>
    <td>Массив групп, который будет отображаться в выпадающем списке.</td>
  </tr>
  <tr>
    <td>`title`</td>
    <td>string</td>
    <td>Заголовок кнопки, который будет отображаться.</td>
  </tr>
  <tr>
    <td>`onSelect`</td>
    <td>(name: string, id: number) =&gt; void</td>
    <td>Функция обратного вызова, которая будет вызвана при выборе группы.</td>
  </tr>
</table>

<br>

5. SearchDropdown - выпадающий список с возможностью поиска. Функционал:
    - Фильтрует элементы в реальном времени.
    - Управляет выбранным элементом


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;{ name: string; id: string }&gt;</td>
    <td>Массив студентов или элементов для поиска.</td>
  </tr>
  <tr>
    <td>`title`</td>
    <td>string</td>
    <td>Заголовок кнопки, который будет отображаться.</td>
  </tr>
  <tr>
    <td>`property`</td>
    <td>keyof IStudent</td>
    <td>Свойство элемента, по которому будет осуществляться поиск.</td>
  </tr>
  <tr>
    <td>`onSelect`</td>
    <td>(id: string) =&gt; void</td>
    <td>Функция, которая будет вызвана при выборе элемента.</td>
  </tr>
</table>

<br>

6. LimitDropdown - выпадающий список с ограничением на выбор элементов. Функционал:
    - Поддерживает выбор до 8 элементов.
    - Обрабатывает ошибки.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`title`</td>
    <td>string</td>
    <td>Заголовок кнопки, который будет отображаться.</td>
  </tr>
  <tr>
    <td>`onChange`</td>
    <td>(selected: Subject[]) =&gt; void</td>
    <td>Функция обратного вызова для обновления выбранных элементов.</td>
  </tr>
  <tr>
    <td>`items`</td>
    <td>Array&lt;Subject&gt;</td>
    <td>Массив предметов для отображения в выпадающем списке.</td>
  </tr>
</table>

<br>

7. LoadingIndicator - компонент для отображения индикатора загрузки.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`text`</td>
    <td>string</td>
    <td>Текст, который будет отображаться в индикаторе загрузки.</td>
  </tr>
</table>

<br>

8. RozaScheme - компонент отображает радарную диаграмму, представляющую рейтинг студента по различным параметрам (например, предметам). Данные автоматически конвертируются в формат, поддерживаемый react-chartjs-2.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`gradesData`</td>
    <td>IGradesData</td>
    <td>Объект, содержащий оценки по предметам для каждого студента.</td>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;IElement&gt;</td>
    <td>Массив объектов, представляющих элементы (предметы или студентов).</td>
  </tr>
  <tr>
    <td>`isLoading`</td>
    <td>boolean</td>
    <td>Состояние загрузки (если true, отображается индикатор загрузки).</td>
  </tr>
</table>

<br>

9. RozaSchemeForTwo - компонент отображает сравнительную радарную диаграмму рейтинга двух студентов. На графике выводятся два набора данных, каждый из которых соответствует одному студенту.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`gradesForTwo`</td>
    <td>IGradesData</td>
    <td>Объект, содержащий оценки по предметам для двух студентов.</td>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;IElement&gt;</td>
    <td>Массив объектов, представляющих элементы (предметы).</td>
  </tr>
  <tr>
    <td>`isLoading`</td>
    <td>boolean</td>
    <td>Состояние загрузки (если true, отображается индикатор загрузки).</td>
  </tr>
</table>

<br>

10. RozaSchemeForPeriods - компонент отображает сравнительную радарную диаграмму для одного студента за два временных периода. Каждый период представлен отдельным набором данных.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`gradesDataFirst`</td>
    <td>IGradesData</td>
    <td>Оценки за первый период.</td>
  </tr>
  <tr>
    <td>`gradesDataSecond`</td>
    <td>IGradesData</td>
    <td>Оценки за второй период.</td>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>Array&lt;IElement&gt;</td>
    <td>Массив элементов (предметов), по которым будут отображаться оценки.</td>
  </tr>
  <tr>
    <td>`isLoading`</td>
    <td>boolean</td>
    <td>Состояние загрузки (если true, отображается индикатор загрузки).</td>
  </tr>
  <tr>
    <td>`firstPeriodLabel`</td>
    <td>string</td>
    <td>Название для первого периода.</td>
  </tr>
  <tr>
    <td>`secondPeriodLabel`</td>
    <td>string</td>
    <td>Название для второго периода.</td>
  </tr>
</table>

<br>

11. GradeTable - таблица для отображения оценок по предметам с возможностью редактирования.


<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Описание</th>
  </tr>
  <tr>
    <td>`subjects`</td>
    <td>Array&lt;ISubject&gt;</td>
    <td>Массив предметов, для которых отображаются оценки.</td>
  </tr>
  <tr>
    <td>`dates`</td>
    <td>string[]</td>
    <td>Массив дат, по которым будут отображаться оценки.</td>
  </tr>
  <tr>
    <td>`gradesData`</td>
    <td>IGradeData</td>
    <td>Объект с данными оценок для предметов по датам.</td>
  </tr>
  <tr>
    <td>`onGradeChange`</td>
    <td>(subjectId: string, date: string, newGrade: string | number | "") =&gt; void</td>
    <td>Функция обратного вызова, которая вызывается при изменении оценки.</td>
  </tr>
  <tr>
    <td>`visibleDates`</td>
    <td>number</td>
    <td>Количество видимых дат для отображения в таблице.</td>
  </tr>
</table>

<br>

<br>В папке utils находится компонент с функциями которые форматируют данные.

- formatDate - форматирует объект Date в строку в формате YYYY-MM-DD. Аргументы: date (Date): Дата которую нужно отформатировать.

- formatDateRange - форматирует диапазон дат в строку формата YYYY-MM-DD - YYYY-MM-DD. Аргументы: range ([Date, Date] | null): Массив из двух объектов Date, представляющий начало и конец диапазона.

<br>Так же существует папка assets, в которой находятся все иконки. 
<br>В папке config ссылка на api сервера.