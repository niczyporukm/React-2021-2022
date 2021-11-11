# PS 11 - 29.05.2022 Zadanie zaliczeniowe (sem2) - "Zakupownik "Online" "

Maksymalna ilość punktów: 5

Punkty  | Ocena
------------- | -------------
3  | 3
3.5  | 3.5
4  | 4
4.5  | 4.5
5  | 5


# Uruchomienie

Instalacja airportsApi - `npm install`

Uruchomienie airportsApi - `npm run devStart`

Uruchomienie gównej aplikacji - `npm install / npm run start`

# Uwagi dotyczące zaliczenia

Każde z zadań polega pośrednio na używaniu Reduxa. Podczas zaliczenia wymagane będzie otwarcie ReduxDevTools'ów i zaprezentowanie przepływu danych w reduxie (pokazanie że dane rzeczywiście się tam znajdują).

Zapytania do API w zadaniach 2 i 4 mają pewnie opóźnienia, pamiętaj o dodaniu efektu wizualnego dla użytkownika na czas wykonywania zapytania, aby uniknąć efektu "kliknąłem i nic się nie dzieje".


UWAGA - Każda ocena może być podwyższona o 0.5 oceny w przypadku gdy wykonane zadania będą miały napisane testy E2E realizujące wytyczne zadania.
w folderze cypress/integration/ znajdują się pliki w któ©ych powinny być pisane testy dla konkretnego zadania.

Przykład:
- Wykonałeś zadanie 1 - na ocenę 3, możesz napisać do niego testy E2E i podnieść ocenę do 3.5 bez realizacji innych zadań

- Wykonałeś zadania 1,2,3,4a - na ocenę 4.5. Zamiast realizować zadanie 4b możesz napisać testy do zadań 1,2,3,4a aby uzyskać ocenę 5

# Zadanie 1 (3 pkt) - Załadowanie produktów z API i wyświetlenie na liście

Adres do pobierania listy produktów GET - http://localhost:9000/products

- Po wciśnięciu przycisku "Załaduj", pobierz listę produktów z api / products, zapisz ją w store i wyświetl na ekranie w lewej kolumnie.

- Kliknięcie na przycisk powinno wywołać zapytanie od API, wyniki zwrócone z zapytania powinny zostać zapisane w reduxie, a następnie wyświetlone w komponencie productsList.

# Zadanie 2 (0.5 pkt) - Shoping list API / Dodawanie / usuwanie produktu z listy zakupowej - API opóźnione o 2sekundy

Adresy API
- pobieranie listy zakupów - GET http://localhost:9000/products/shopingList
- dodawanie produktu do listy zakupowej - POST http://localhost:9000/products/shopingList/new - jako request body wysyłamy cały produkt (obiekt)
- usuwanie elementu z listy zakupowej DEL - http://localhost:9000/products/shopingList/:id

- Kliknięcie lewym przyciskiem myszy na produkt z lewej kolumny powinno dodać go do listy zakupowej (prawa kolumna)
- Kliknięcie lewym przyciskiem myszy w prawej kolumnie powinno usunąć produkt z listy zakupowej

Wyświetlane dane w kolumnie shopingList powinny być zawsze pobierane z API

# Zadanie 3 (0.5 pkt) - Filtrowanie w Reduxie

Użyj elementów formularza z sekcji "Filters" aby filtrować produkty (takie same filtrowanie jak w zadaniu zaliczeniowym sem.1) z tą różnicą, że filtrowanie powinno się odbywać za pomocą Reduxa.
Akcja w reduxie otrzymuje dane z formularza, dokonuje filtrowania i zapisuje przefiltrowaną listę w store ktora następnie jest wyświetlana (każdorazowa modyfikacja formularza powinna uruchamiać filtrowanie)

# Zadanie 4a (0.5 pkt) - Szczegóły produkty - nawigacja (dodatkowy routing)

API do pobierania szczegółów produktu - http://localhost:9000/products/:id - opóźnione o 2 sekundy

Klikniecie prawym przyciskiem na produkt w lewej kolumnie powinno przenieść użytkownika do podstrony /...productDetails/:id na któ©ej widoczne będą detale wybranego produktu.

# Zadanie 4a (0.5 pkt) - Szczegóły produkty - nawigacja za pomocą klawiatury!
Zmodyfikuj zadanie 4 w taki sposób aby:
- Po załadowaniu prodktów pierwszy z nich w lewej kolumnie powinien być aktywny
- Wciskanie strzałki do góry / strałki do dołu powinno ustawiać poprzedni / następmy produkt jako aktywny
- wciśnięcie na klawiaturze przycisku "d" powinno przenieść użytkownika do strony z detalami aktywnego produktu
- na stronie ze szczegółami wciśnięcie 'backspace' powinno przenieść użytkownika z powrotem do strony głównej

Wskazówki:
Do wyłapywania wciskania przycisku klawiatury służy w Reakcie event "onKeyDown", który przekazuje informacje na temat wciśniętego przysusku za pomocą wartości event.
Przykład użycia - https://bobbyhadz.com/blog/react-onkeydown-div
Lista dostępnych event.key /event.keyCodes - https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/


Powodzenia !!!