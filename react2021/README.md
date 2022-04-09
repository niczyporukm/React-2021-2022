# PS 8 - 10.04.2022 Redux - https://redux.js.org/

Instalacja:

Redux - `npm install redux react-redux`

ReduxToolkit - `npm install @reduxjs/toolkit`

Redux Chrome Extension - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

# Zadanie 1 - Instalacja / przygotowanie plików

Zainstaluj Redux'a / ReduxToolkit'a oraz dodatek do Chrome'a
W głównym folderze (src) utwórz folder "redux" i przygotuj puste pliki, struktura nowych plików powinna wyglądać jak poniżej:

![image](https://user-images.githubusercontent.com/9209826/162574557-723d79a6-bee5-4863-a187-1d8c224b50bb.png)
- redux/store.js - główny plik konfiguracyjny reduxa (na ten plik powinien wskazywać <Provider/> którego użyjesz w kolejnym zadaniu
- redux/airports - folder przeznaczony do przechowywania danych związanych z lotniskami
- redux/airports/initialState.js - w tym pliku będziemy exportowali domyślny zestaw danych (stanów) dla kategorii airports
- redux/airports/reducer.js - w tym pliku będą znajdowały się reducer modyfikujący dane w storze na podstawie otrzymywanych akcji
- redux/airports/selectors.js - w tym pliku będą znajdowały się "selectory", czyli funkcje które potrzebują dokonać jakichś operacji przed zwróceniem danych ze store'a


# Zadanie 2 - Redux - początkowa konfiguracja

Początkowa konfiguracja będzie się składała z 4 kroków:
- w pliku `store.js` zdefiniuj skąd będą brane informacje na temat reducerów, poprzez podanie ich do metody `configureStore` z redux toolkit'a
![image](https://user-images.githubusercontent.com/9209826/162574973-902b0ebc-4aef-4f16-a39d-1a5ea6a2912a.png)
- w pliku `reducer.js` który jest importowany powyżej utwórz "szablon" dla akcji które będziemy dodawali w kolejnych zadaniach
![image](https://user-images.githubusercontent.com/9209826/162575041-c9a353e3-bfbe-4542-81e9-869d5f9e2919.png)
- w pliku `initialState.js` który jest importowany powyżej dodaj początkowy stan dla naszego "zbioru" airports, niech będzie on pustą listą
![image](https://user-images.githubusercontent.com/9209826/162575119-ede7a4d0-c401-4d1d-aeed-3e947e266b9c.png)
- na koniec pozostało przekazać te wszystkie informacje dla naszej aplikacji, w tym celu "opakuj" wszystkie nasze komponenty w pliku `index.js` komponentem <Provider> pochodzącym z biblioteki redux i przekaż do niego jako właściwość store konfigurację z pliku store.js,
![image](https://user-images.githubusercontent.com/9209826/162575291-15129015-7a73-4541-9b52-5ecbc5f78530.png)

Po poprawnej konfiguracji powinieneś mieć możliwość poglądu stanu początkowego w rozszerzeniu do Chrome
![image](https://user-images.githubusercontent.com/9209826/162575349-c948640a-c85c-4c91-90b0-49947e5e3ad5.png)

Jak widać powyżej już mamy dostępny globalny stan dla całej aplikacji o nazwie "airports" który jest pustą listą zgodnie z naszą deklaracją.

# Zadanie 3 - Ładowanie lotnisk z pliku i wyświetlenie w komponencie pobranych danych ze store'a

W ramach tego zadania:
- zamień pustą listę w `initialState.js` na dane z pliku `src/common/consts/airports.js`, następnie sprawdź czy trafiły one do store'a w rozszerzeniu Chrome
- pobierz te dane w komponencie AirportsList i wyświetl jak na poprzednich zajęciach, aby tego dokonać:
	- musisz przekazać stan ze store'a do komponentu AirportsList, aby był dostępny jako props wewnątrz komponentu, służy do tego metoda `mapStateToProps` której szablon wygląda jak poniżej. Funkcja ta powinna być zadeklarowana pod komponentem, ale przed jego wyexportowaniem.

```
const mapStateToProps = (state) => {
  // state - dane pochodzące z redux sotre'a
  return {
    airportsFromRedux: state.airport.airports,
    // airportsFromRedux - tak będzie się nazywał props wewnątrz komponentu
    // state.airport.airports - źródło danych które mają być dostępne jako "props.airportsFromRedux"
  };
};
```
Aktualnie jest to zwykła funkcja która nie jest nigdzie wytkorzystywana. Aby za jej pomocą rzeczywiście "dokleić" nowe propsy (właściwości) do komponentu musisz wykorzystać metodę `connect` z reduxa, podczas exportowania komponentu, przykład poniżej:
![image](https://user-images.githubusercontent.com/9209826/162576363-28ed802b-7c93-428d-8b91-785a3a2a8d8a.png)
![image](https://user-images.githubusercontent.com/9209826/162576366-ae33d4a4-f303-4b8d-8edd-a59e5123df3a.png)

Jeżeli wszystko działa poprawnie pod właściwością `props.airportsFromRedux` powinieneś mieć lotniska pochdzące z reduxa. Wyświetl je na ekranie jak na poprzednich zajęciach.

# Zadanie 4 - Dodanie lotnisk za pomocą akcji z komponentu

W zadaniu poprzednim dodaliśmy dane z pliku bezpośednio w inicjalizacji store'a. W tym zadaniu zmieńmy to zachowanie w taki sposób aby dane były ładowane za pomocą akcji wywołanej w komponencie App.js (podobnie jak było z ładowaniem danych z localStorage na poprzednich zajęciach). Powinieneś zatem:
- obsłużyć akcję o typie "SET_INITIAL_AIRPORTS_LIST" która ustawi w redux store dane które otrzyma z komponentu
![image](https://user-images.githubusercontent.com/9209826/162576964-d6740e26-6696-466a-87a9-818d7ee21ec2.png)
- wysłać te dane z komponentu, powinieneś zatem w komponencie `App.js`:
	- uzyskać dostęp do akcji typu "SET_INITIAL_AIRPORTS_LIST" za pomocą wywołania funckji z props'a. Użyj do tego funkcji `mapDispatchToProps` aby zmapować wywołanie akcji "SET_INITIAL_AIRPORTS_LIST" tzw. dispatch pod konkretnym propsem który będzie dostępny w komponencie

```
const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
```

Dołączenie powyższej funkcj spowoduje, że pod właściwością `props.setInitialAirportsList` będzie znajdowac się funcja która przyjmuje dane, następnie przekazuje je do akcji w reducerze.

Możesz zatem wewnątrz komponentu wywołać metodę `props.setInitialAirportsList(lotniskaZPliku)` aby dane na temat lotnisk zostały zapisane w storze

W pliku `initialState` nie potrzebujemy już ustawiać wartości z pliku, ponieważ robimy to z poziomu wywołania akcji, zatem ustaw tam z powrotem pustą listę jako wartość domyślną.

# Zadanie 5 - Ładowanie zawartości dla AirportDetails

Aby w komponencie AirportDetails wyświetlić informacje o lotnisku potrzebujemy pobrac jego informacje se store'a podstawie id. Aby nie pobierać wszystkich lotnisk do komponentu i szukać odpowiedniego, napiszmy prosty selektor "funkcję pomocniczą która zrobi takie wyszukanie poza naszym komponentem i zwróci wynik". Właśnie na potrzeby takich funkcji utworzyliśmy dedykowany plik `selectors.js`, dodajmy w nim
	![image](https://user-images.githubusercontent.com/9209826/162577983-85bbeacb-3649-435d-b9eb-5e920511ca66.png)
czyli funkcję która będzie przyjmowała 2 argumenty, cały stan reduxa oraz id lotniska które szukamy
Aby wykorzystać taki selektor wewnątrz komponentu musimy go dodać podobnie jak w zadaniu 3 za pomocą `mapStateToProps`
	![image](https://user-images.githubusercontent.com/9209826/162578010-b2579e14-087d-467f-ab9e-3f39bbd1b4de.png)
z tą różnicą że nie będzie to wyciągnięcie informacji ze store'a jak w zadaniu 3 a wywołanie funkcji z parametrem "id"

Dzięki takiemu mapowaniu bedziemy mogli wywołać funkcję wewnątrz komponentu np
`const airportDetails = props.getAirportById(idLotniskaDoWyszukania)`
A następnie wykorzystac te dane do wyświetlenia w komponencie.

# Zadanie 6 - Modyfikacja danych w store - usuwanie lotniska

Aktualnie funkcja usuwania jest "popsuta", ponieważ jedynie przenosi użytkownika do strony z listą. Celem tego zadania jest wywołanie fukcji (przed przeniesiem użytkownika do strony z lotniskami) która będzie usuwała lotnisko o podanym id, a tak na prawdę będzie ustawiała nową listę w stor'e która nie będzie zawierała oczekiwanego lotniska.
Aby to zrobić obsłuż nową akcję w reducerze jak poniżej
 ![image](https://user-images.githubusercontent.com/9209826/162578477-0997807e-c31f-42f2-b5e5-6118cd802255.png)
i wykorzystaj wiedzę z zadania 4 aby obsłużyć to w komponencie `AirportDetails.js`



# Zadanie 7 - zamiana mapStateToProps / mapDispatchToProps na useSelector / useDispach

Metody mapujące `mapStateToProps` oraz `mapDispatchToProps` zostały wprowadzone z myślą o komponentach klasowych (i są w nich wykorzystywane nadal), ale jak widać możemy z nich korzystać również w komponentach funkcyjnych.
Niewątpliwą zaletą k.funkcyjnych jest możliwość korzystania z hooków, biblioteka Redux "serwuje" Nam dwa hooki `useSelector` oraz `useDispach` które są odpowiednikiem funkcji mapujących.
Wykorzystaj wiedzę z wykładu i zastąp funcje mapujące we wszystkich komponentach hookami, zwróć uwagę o ile mniej kodu (a zarazem zapamiętanej wiedzy) potrzeba żeby wykonać to samo !!!

# Zadanie 8 - Header.js - przycisk "Zresetuj lotniska"
W ramach tego zadania dodaj do komponentu `Header.js` przycisk "Zresetuj lotniska", który po kliknięciu wywoła funcję ze store'a która ustawia listę lotnisk do stanu początkowego (z pliku). Ta metoda została napisana w zadaniu 4 zatem pozostaje jedynie jej użyć za pomocą hooka useDispatch.

Po wykonaniu tego zadania zwróć uwagę jak mało nowego kody trzeba było napisać. Dzięki już gotowej funkcji w store i nasłuchiwaniu bezpośrednio na store w komponencie `AirportList` wszystko dzieje się automatycznie bez zbędnej komunikacji w góre i w dół (tak wyglądało to na jednych z piewrszych zajęć).

# Zadanie 9 - Mała optymalizacja
Zmodyfikuj reducer dla akcji "SET_INITIAL_AIRPORTS_LIST" a taki sposób aby nie trzeba było przesyłac listy lotnisk z komponentu (aktualnie 2 komponenty wywołują tą akcję, zatem w obu trzeba wywołać `import airports from '.../airports.js'` Zamiast tego zrób to jedynie raz już wewnątrz reducera i wywołaj akcje bez parametru wewnątrz dwóch komponentów


