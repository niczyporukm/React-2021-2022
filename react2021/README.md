# PS 10 - 15.05.2022 Testy - Unit / Integration / E2E Tests

Instalacja airportsApi - `npm install`

Uruchomienie airportsApi - `npm run devStart`

Uruchomienie gównej aplikacji - `npm install / npm run start`

# Zadanie 1 - Testy jednostkowe - Unit tests
Dukumentacja Jest - główna biblioteka do testowania - https://jestjs.io/docs/api - wywołuje asercje (excpect(...))

Dokumentacja React Testing Library - queries (wyszukiwanie elementów które są używane w porównaniu / asercji przez bibliotekę Jest) - https://testing-library.com/docs/queries/about/#overview

Komenda `npm run test` uruchamia automatycznie wszystkie testy zlokalizowane w plikach `... .test.js`
Celem tego zadania jest napisanie testów jednostkowych dla komponentu LoginPage.js (w pliku LoginPage.test.js który musisz utworzyć w tym samym folderze) który zawieta dwa pola tektowe first / last name oraz przycisk do logowania który jest aktywny jeżeli oba pola są wypełnione. Test powinien co najmniej sprawdzać rzeczy opisane na poniższym zrzucie ekranu, który jednocześnie jest szablonem:

![image](https://user-images.githubusercontent.com/9209826/168443422-c8d14082-e8f5-4892-b71f-7a8e52c07e4d.png)

# Zadanie 2 - Testy integracyjne - Integration tests - Testowanie lokalnej bazy danych (API)

W ramach tego zadania napisz testy integracyjne w nowym pliku `src/tests/apiIntegration.test.js` - jest utworzony i dla ułatwienia zawiera już szablon
Testy napisane w tym zadaniu będziemy odpalali komendą `npm run integrationTests` zatem musisz dodać definicję dla takiej komendy w pliku package.js jak poniżej

![image](https://user-images.githubusercontent.com/9209826/168443764-12977fe9-0c1e-48d8-b674-b1e1d7461879.png)

# Zadanie 3 - Testy E2E - Cypress

Instalacja cypressa - wewnątrz folderu  `npm install --save-dev cypress` - z racji pobierania wielu plików instalacja może trwać dłużej niż standardowo
Dukumentacja z listą dostępnych asercji - https://docs.cypress.io/api/commands/and#Syntax
Testy będziemy odpalać komendą `npm run cypress:open`, zatem musisz dodać nowe wywołanie w pliku package.json jak pokazano poniżej
![image](https://user-images.githubusercontent.com/9209826/168444778-81129ac7-f382-45ce-8535-6f686975315c.png)


Po zainstalowaniu cypressa, zostanie automatycznie utworzony folder "cypress" z plikami konfiguracyjnymi oraz przykładami działających testów, prześledź kilka aby zrozumieć jak wygląda składnia, następnie za pomocą komendy `npm run cypress:open` otwórz okno cypressa w którym będą prezentowane na żywo wywołania testów, następnie kliknij na przykładowy test i zobacz jak to wygląda.

W ramach tego zadania utwórz nowy plik `cypress/integration/airports/airports.spec.js` w którym będą się znajdować nowo napisane testy.

Szablon z przykładowym testem poniżej :
![image](https://user-images.githubusercontent.com/9209826/168445139-95826247-4a18-4cee-ac58-df0168387efd.png)

W ramach tego zadania napisz tak dużo asercji (scenariuszy testowych) ile uda ci się wymyślić na podstawie tego jak działa aplikacja (weź pod uwagę opóźnienia, wywkakujące okienka, przekierowania itp)

Aby odwoływać się do kolejnych elementów jak poniżej
![image](https://user-images.githubusercontent.com/9209826/168445203-c54a04d5-fdd4-4e5e-8b95-d684fba94f49.png)

będziesz musiał na bierząco dodawać unikatowe właściwości do elementów w komponentach, powodzenia !.

Przykładowy scenariusz do testowania:
- wpisz imie
- wpisz nazwisko
- kliknij na przycisk
- sprawdź url
- sprawdź czy strona zawiera wpisane imie i nazwisko
- kliknij na przycisk "Załaduj lotniska"
- sprawdź czy po 2-ch sekundach kręci się spinner
- sprawdź czy po 4-rech sekundach widoczne jest przykładowe lotnisko
- kliknij na przykladowe lotnisko
- sprawdź czy widoczny jest spinner
- sprawdź po 4 sekundach czy użytkownik został przeniesiony do adresu url
- kliknij na ikonę kosza
- sprawdź czy widoczny jest jakiś tekst z okienka
- kliknij na "tak"
- sprawdź czy użytkownik zostal przenioeniony na adres url 
- sprawdź czy nie ma na ekranie lotniska które usunąłeś
- ......



# Zadanie 4 - Automatyzacja - uruchamianie testów jednostkowych przed każdym commitem - git hook pre-commit

Częstą praktyką jest uruchamianie szybkich testów - jednostkowych przy każdym commicie, dzięki temu na bierząco mamy kontrolę, czy nie psujemy danej funkcjonalności. W ramach tego zadania włączymy taką automatyzację, użyjemy do tego git hook'a pre-commit.

Do łatwej integracji z git hookami mamy moduł husky - https://www.npmjs.com/package/husky
Instalacja - `npm install husky --save-dev`

Aby skonfigurować pre-commit hook postępuj zgodnie z instrukcją

![image](https://user-images.githubusercontent.com/9209826/168445380-2201e9a0-b41b-4bc6-8e88-d17bc7eaed2d.png)

Aby sprawdzić czy wszystko działa poprawnie, utówrz dowolny commit, testy powinny zostać odpalone automatycznie.
