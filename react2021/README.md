




# PS 9 - 08.05.2022 Integracja z API / Axios - https://axios-http.com/docs/intro





Instalacja Axios:





Axios - `npm install axios`





Instalacja i odpalenie API:



- w oddzielnym terminalu wejdź do folderu z API



- npm install



- npm run devStart





API powinno zostać odpalone lokalnie z portem `9000` , aby sprawdzić czy działa poprawnie wejdź pod adres `http://localhost:9000/`, powinieneś zobaczyć stosowny komunikat





API zawiera następujące endpointy:



`http://localhost:9000/airports` GET - zwraca podstswową listę lotnisk (id oraz nazwę lotniska)



`http://localhost:9000/airports/delayed` GET - jak wyżej z opóźnieniem (czasem wykonania) - 3s



`http://localhost:9000/airports/delayed/failed` GET - zapytanie z opóźnieniem 3s które zawsze zwraca błąd (`500 Internal Server Error`)



`http://localhost:9000/airports/:id` GET - zwraca szczegółowe dane lotniska o podanym id



`http://localhost:9000/airports/:id/delayed` GET - zwraca szczegółowe dane lotniska o podanym id z opóźnieniem



`http://localhost:9000/airports/:id` DELETE - usuwa lotnisko o podanym id



`http://localhost:9000/airports/new` POST - dodaje nowe lotnisko, wymaga wysłania obiektu

{

name: "Luton",

city: "Luton",

country: "UK",

iata_code: "LUT",

id: "11",

}





# Zadanie 1 - Pobranie i wyświetlenie lotnisk z API



Celem tego zadania jest wyświetlenie listy lotnisk (podobnie jak na poprzednich zajęciach) pobranych z API po kliknięciu na przycisk "Załaduj lotniska", który znajduje się w komponencie Header.js Aby to zrobić powinieneś:



- po kliknięciu na przycisk wywołać asynchroniczną funkcję (nazwijmy ją `getAirportsFromAPI`)



- powyższa funkcja powinna wywołać zapytanie GET dla adresu `http://localhost:9000/airports`



- pobrane lotniska powinny być zapisane w Redux store (wykorzystaj do tego utworzoną na poprzednich zajęciach funkcję dispatchera `setInitialAirportsList` dostępną w komponencie Header





# Zadanie 2 - Monitorowanie etapów zapytania, stany "initial" / "loading" / "success" / "error"





Zapytania do API z różnych przyczyn mogą zajmować mniej lub więcej czasu, w związku z tym możemy wyróżnić kilka zauważalnych etapów każdego zapytania:



-  `initial` - stan początkowy przed wywołaniem



-  `loading` - stan utrzymujący się podczas obługi zapytania



-  `success` - stan po pomyślnym zakończeniu zapytania



-  `error` - stan po niepomyślnym zakończeniu zapytania (np. błędny adres)





Celem tego zadania jest utworzenie nowego pola w Redux store (nazwijmy je `airportsLoadingState`) które będzie zawsze zawierało jeden z powyższych stanów, ustawianie stanów w zależności od sytuacji i sprawdzenie działania w ReduxDevTools





Aby wykonać to zadanie powinieneś:



- utworzyć nowe pole w Redux store jak opisano powyżej oraz dodać do niego powiązany reducer (plik reducer.js)



- w komponencie Header.js umożliwić dostęp do utworzonego reducera poprzez metodę wiążącą `mapDispatchToProps` (alternatywnie możesz użyć hook'a `useDispatch`) - wiedza z poprzednich zajęć



- w asynchronicznej metodzie `getAirportsFromAPI` w odpowiednich miejscach wywołaj funkcję z dispatcha aby ustawiać stany:



-  `loading` przed wywołaniem zapytania



-  `success` po wywołaniu w bloku `try`



-  `error` po wywołaniu w bloku `catch`





Jeżeli wszystko działa poprawnie w dodatku ReduxDevTools powinieneś widzieć kroki które zmieniają stan pola `airportsLoadingState` w store





# Zadanie 3 - Pobranie z opóźnieniem / obsługa statusu "pending"





Skoro posiadasz już stany które wyróżniają poszczególne etapy zapytania zróbmy z tego praktyczny przykład.



Jedno z zapytań API `http://localhost:9000/airports/delayed` ma takie samo zastosowanie jak to z zadania 1, lecz wykonuje się dłużej - 3 sekundy, zatem stan `loading` będzie zauważalnie dłuższy / użytkownik przez 3 sekundy nie będzie miał żadnej informacji o tym co się dzieje. Podmień adres na ten z końcówką "delay" i zobacz o czym mowa.





Aby nie dopuścić do takiej sytuacji wyświetlmy dla użytkownika ikonę ładowania https://mui.com/material-ui/react-progress/#circular-indeterminate na czas obsługi zapytania.



W tym celu powinieneś:



- w komponencie `AirportsList` uzyskać dostęp do utworzonego pola `airportsLoadingState` w store za pomocą funkcji wiążącej `mapStateToProps` lub alternatywnie hook'a `useSelector`



- w metodzie render komponentu `AirportsList` powinieneś :



- wyświetlać listę lotnisk tylko dla statusu `success`



- wyświetlać `<CircularProgress />` z biblioteki materialUI dla statusu `loading`





# Zadanie 4 - Pobranie z opóźnieniem / obsługa statusu "error"



Każde zapytanie do API z różnych przyczyn może zakończyć się niepowodzeniem, z tego powodu powinniśmy zawsze zabezpieczać się przed taką sytuacją poprzez odpowiednią informację zwrotną dla użytkownika.

W ramach tego zadania wykorzystaj "zepsuty" endpoint `http://localhost:9000/airports/delayed/failed` który zwraca zawsze error 500



W ramach tego zadania:

- wykonaj błędne zapytanie / odczytaj kod błędu w sekcji "catch(error)" i zapisz go do store'a

- wyświetl kod błędu zapisany w store za pomocą notyfikacji "Snackbar - https://mui.com/material-ui/react-snackbar/#simple-snackbars z biblioteku materialUI, ustaw jej autozamykanie na kilka sekund i sprawdź czy wszystko działa poprawnie. Komponent Snackbar możesz użyć w dowolnym miejscu (w dowolnym komponencie) ponieważ wyświetla on wiadomość w zaeklarowanym miejscu niezależnie od położenia w drzewie DOM.



# Zadanie 5 - Szczegóły lotniska - pobierane z API



Przechodzenie do szczegułów lotniska robiliśmy już na poprzednich zajęciach. To zadanie polega na zaimplementowaniu tej samej funkcjonalności, z tą różnicą, że szczegółowe dane lotniska będą każdorazowo pobierane z API i zapisywane w Redux store.

Aby wykonać to zadanie powinieneś:

- wykorzystać endpoint ``http://localhost:9000/airports/:id/delayed`` do pobrania detali lotniska

- zapisać dane w nowym polu Redux store o nazwie `selectedAirport` - jego domyślna wartość może być pustym obiektem `{}`

- przenieść użytkownika do widoku Airport details i wyświetlić dane

- po kliknięciu na `<--` która przenosi z powrotem na listę lotnisk usuwaj aktualne litnisko, tj. ustawiaj `selectedAirport` na pusty obiekt `{}`



Czy zauważyłeś jakieś uniedogodnienia związane z długo wykonującym się zapytaniem do API ? Jeżeli tak zastanów się jak to "polepszyć", zamień wykonywane akcje miejscami / wyświetl gdzieś ikonę ładowania do czasu aż nie uzyskasz danych z API



# Zadanie 6 - Usuwanie lotniska z bazy danych (API)



Celem tego zadania będzie umożliwienie użytkownikowi usuwania lotnisk z bazy danych (poprzez kliknięcie w ikonę kosza) - aktualnie ta funkcjonalność działa ale tylko dla stanu lokalnego (w Store), zatem po usunięciu lotniska i zaczytania danych z bazy nadal mamy wszystkie.



W ramach tego zadania:

- w procesie usuwania użyj endpointu ``http://localhost:9000/airports/:id`` - metoda DELETE aby usunąć podany element z bazy danych

- następnie tuż potem pobierz listę wszystkich lotnisk i przypisz do stanu w store (odpowiednik zadania 1)

- przenawiguj użytkownika do listy lotnisk



# Zadanie 7 - Dodawanie lotniska do bazy danych



Skoro w poprzednim zadaniu zrobiliśmy usuwanie, wypadało by również umożliwić dodanie nowego lotniska



W tym celu:

- W komponencie Header.js utworz nowy przycisk "Dodaj lotnisko" i podepnij pod niego funkcję która:

- Będzie wywoływała endpoint `http://localhost:9000/airports/new` metodą POST - dokumentacja tutaj -> https://axios-http.com/docs/post_example

- Przykładowy obiekt reprezentujący lotnisko znajdziesz na górze tego dokumentu. Aby zaoszczędzić czas używaj przykładowego lotniska "na sztywno", zamiast operować na formularzu.



Jest to ostatnie z zadań, zatem jeżeli został Ci czas to możesz:

- W ramach przypomnienia utworzyć formularz do zadania 7

- Wykorzystać endpoint `http://localhost:9000/airports/:id` z metodą PUT do modyfikacji dowolnego z istniejących lotnisk (pododbnie jak w zapytaniu `.../new` wymagane jest tu wysyłanie całego nowego obiektu (API jest dosyć mocno "dziurawe", zatem możesz spodziewać "niespodzianek" :))