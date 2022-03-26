


# PS 6 - 06.03.2022 WebStorage & ReactRouter



Docs:

WebStorage - https://www.w3schools.com/html/html5_webstorage.asp

ReactRouter - https://reactrouter.com/docs/en/v6



Instalacja reactRouter'a : `npm install react-router-dom@6`



# Zadanie 1 - sessionStorage vs localStorage

Celem tego zadania jest zrozumienie działania oraz różnic pomiędzy session i localStorage. Aby poglądać / modyfikować powyższe wartości nie musisz mieć własnej aplikacji. Wejdź na dowolną stronę np [podyplomówka](https://javascript.wi.pb.edu.pl/?utm_source=wwwpb&utm_medium=www&utm_campaign=oferta&utm_id=javascript), otwórz konsolę i po wpisaniu `localStorage` lub `sessionStorage` zobaczysz aktualne wartości które są zapisane dla tej strony www.



dodawanie wartości do l.storage - `localStorage.setItem("lsUser", "Jan Local");`

dodawanie wartości do s.storage - `sessionStorage.setItem("ssUser", "Jan Session");`



Wykorzystując powyższe instrukcje dodaj wartości do local / session storage, podejrzyj je, a następnie:

- odśwież stronę - zrób podgląd

- zamknij kartę przeglądarki, odpal stronę ponownie - zrób podgląd

- zamknij przeglądarkę - zrób podgląd

- otwórz przeglądarkę w trybie incognito - zrób podgląd



Przeanalizuj w którym podpunkcie straciłeś dostęp do wartości z sessionStorage a w którym z localStorage.



# Zadanie 2 - ReactRouter


Po zainstalowaniu ReactRoutera (komenda była podana u góry) możemy dodać stronę główną oraz podstrony (przejścia) dla Naszej aplikacji. Będziemy to robić na "samej górze" naszej aplikacji, a zatem w pliku `index.js`

Celem tego zadania jest "opakowanie" naszej aplikacji w komponent ReactRoutera i ustawienie komponentu <App> jako wyświetlanego w domyślnej lokalizacji. Przykład jak tego dokonać jest opisany [tutaj](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)

W końcowym efekcie aplikacja powinna zachowywać się dokładnie tak samo jak poprzednio.

Gdy udało Ci się to zrobić, w ramach testu do lokalizacji domyśnej wstaw inny komponent np ProductsList zamiast App, zaobserwuj zmiany poczym wróc do rozwiązania z komponentem App jako domyślnym.


Pamiętaj: Jeżeli chcesz użyć komponentu ProductsList, musisz go najpierw zaimportować u góry pliku


# Zadanie 3 - Login Page jako strona startowa



Jeżeli przetestowałeś jakiś inny komponent niż App jako komponent domyślny w powyższym zadaniu, to już wiesz w jaki sposób wyświetlić coś innego niż naszą aplikację na "dzień dobry". Celem tego zadania jest:

- Utworzenie zupełnie nowego komponentu "LoginPage" w lokalizacji - `components/LoginPage/LoginPage.js` (nie ma znaczenia czy będzie to komponent klasowy czy funkcyjny - twój wybór !!!)

- Komponent ten powinien wyświetlać przycisk "Sign In" - na razie to wszystko...

- LoginPage powinien być komponentem wyświetlanym domyślnie zatem zastąp użycie komponentu App w index.js utworzonym przed chwilą (routing dla ścieżki domyślnej tj. "/").



Podobnie jak w poprzednim zadaniu, pamiętaj o zaimportowaniu LoginPage u góry !!!



Na koniec tego zadania powinieneś widzieć przycisk "Sign In" który nic nie robi a na dodatek nie masz dostępu do reszty aplikacji (╥﹏╥)



# Zadanie 4 - Nowy adres - routing dla aplikacji

Celem tego zadania jest "odzyskanie" dostępu do głównej części aplikacji, na razie bez ingerowania w przycisk, a poprzez ręczne zmodyfikowanie adresu url, aby tego dokonać musisz:

- dodać nowy Route dla porządanego adresu (niech będzie to "/shopping"), przykład jak to zrobić znajdziesz [tutaj](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)

- po dodaniu nowego adresu dopisz w przeglądarce http://localhost:3000 **/shopping**



Na koniec tego zadania powinieneś mieć możliwość ręcznej nawigacji pomiędzy komponentami App oraz LoginPage poprzez modyfikowanie końcówki adresu url.



# Zadanie 5 - Nawigowanie po aplikacji

Zastąpmy nawigowanie ręczne klikaniem po aplikacji. W ramach tego zadania wykonaj następujące przekierowania:

- kliknięcie na przycisk "Sign In" w komponencie LoginPage powinno przenosić użytkownika do adresu "/shopping" -> strona główna (symulujemy logowanie)

- kliknięcie na przycisk "Sign out" w komponencie Header powinno przenosić użytkownika do ścieżki domyślnej "/" -> strona logowania (symulujemy wylogowanie)



Za obsługę przekierować odpowiada komponent < Link >, którego przykłady użycia znajdziesz [tutaj](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app) . Musisz zatem "opakować przyciski "Sign In" oraz "Sign out" w komponent < Link > zgodnie z przykładem.



# Zadanie 6 - Logowanie użytkownika - zapis do localStorage



Celem tego zadania jest dodanie do komponentu LoginPage pola tekstowego z etykietą "User name" w którym będziemy podawali nazwę użytkownika. Użytkownik ten powinien być zapisany w localStorage abyśmy mogli nastepnie wyświetlić jego nazwę w aplikacji. Podczas wylogowywania z aplikacji użytkownik ten powinien być również kasowany z localStorage.

# Zadanie 7 - Router guard - wymuszenie przeniesienia do login page jeżeli użytkownik nie istnieje

Celem tego zadania jest dodanie do komponentu App.js takiej logiki, która za każdym razem sprawdzi czy istnieje użytkownik zapisany w localStorage.

- Jeżeli tak -> aplikacja zachowa się normalnie

- Jeżeli nie -> użytkownik zostanie przeniesiony na stronę logowania (tak na prawdę nie zobaczy nawet strony głównej)



Aby wykonać test powyższego zadania zaloguj się normalnie, poczym ręcznie tj. przez konsole w przeglądarce usuń użytkownika z localStorage, komenda `localStorage.clear()` wyczyści cały storage. Następnie odśwież stronę - skoro usunąłeś użytkokwnika, to powinieneś wylądować na stronie LoginPage



# Zadanie 8 - Więcej informacji o użytkowniku

Celem tego zadania jest rozszerzenie zadania 6-tego w taki sposób, aby LoginPage zawierał 2 pola tekstowe tj. "First Name" oraz "Last Name"

Informacje o takim użytkowniku będzie można zapisać w obiekcie o następującej strukturze:
`{
firstName: 'Jacek',
lastName: 'Placek
}`

Taki właśnie obiekt powinien być przetrzymywany w localStorage aby nadal była możliwość wyświetlenia imienia i nazwiska aktualnie zalogowanego użytkownika w komponencie Header.

Do tego zadania musisz wykorzystać wspomniane na wykładzie metody JSON.stringify() oraz JSON.parse()
