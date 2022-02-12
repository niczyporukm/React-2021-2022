# PS 5 - 13.02.2022 Zadanie zaliczeniowe (sem1) - "Zakupownik"

Maksymalna ilość punktów: 5

Punkty  | Ocena
------------- | -------------
3  | 3
3.5  | 3.5
4  | 4
4.5  | 4.5
5  | 5

**Ważne**
- W zadaniu zaliczeniowym powinien się znajdować co najmniej jeden komponent **klasowy oraz funkcyjny**. Zwróć uwagę, że w szablonie aplikacji wszystkie komponenty są funkcyjne, zatem zastanów się i zamień co najmniej jeden na komponent klasowy.
- Zadaniem **obowiązkowym** jest zadanie nr.1 (za 3 pkt), pozostałe zadania mogą być wykonywane opcjonalnie w celu podniesienia punktacji

Aplikacja "Zakupownik" jest pomocnikiem w planowaniu u realizowaniu zakupów.
Składa się ona z 4 sekcji:
- Sekcja dodawania dostępnych produktów - komponent "AddProducts"
- Sekcja filtrowania dostępnych produktów - komponent "ProductsFilters"
- Lewa kolumna - wyświetlająca dostępne produkty - komponent "ProductsList"
- Prawa kolumna - wyświetlająca produkty dodane do listy zakupowej - "ShopingList"

Aplikacja zawiera zdefiniowaną listę produktów w pliku src/common/consts/produkty.js, a przykładowa struktura pojedyńczego produktu wygląda jak poniżej
  ```
  {
      nazwa: 'mleko',
      kategoria: 'nabiał',
      produktSpozywczy: true,
  }
  ```


# Zadanie nr.1 (obowiązkowe) - 3pkt
- Lewa kolumna (dostępnych produktów) powinna wyświetlać listę produktów pochodzącą z pliku produkty.js w postaci listy nienumerowanej (wyświetlamy tylko nazwę)
- Kliknięcie lewym przyciskiem myszy na jeden z produktów dodaje go do 'listy zakupowej'
- Prawa kolumna wyświetla aktualną listę zakupową, zatem na początku będzie pusta, lecz po kliknięciu na dowolny produkt z listy dostępnych produktów pojawi się on na liście zakupowej (wybrany element nie znika z listy dostępnych produktów)
- Powinna istnieć możliwość wielokrotnego wybrania tego samego produktu, w tym celu wystarczy ponownie wybrać element z listy po lewej stronie, poczym po prawej powinien on się pojawić jako kolejna pozycja
- Kliknięcie prawym przyciskiem myszy na dowolny element z listy zakupowej powinien usunąć go z listy (symuluje to sytuacje w ktorej ktoś wrzucił produkt do wózka z zakupami i usunął go z listy zakupowej)

# Zadanie nr.2 - Filtrowanie listy "dostępnych produktów" (0.5 pkt)
Lista po lewej stronie (dostępnych produktów) może być bardzo długa, zatem powinna posiadać możliwość filtrowania aby w krótkim czasie wyszukać interesujący Nas produkt. Sekcja filtrów powinna posiadać 2 typy filtrów:

- po nazwie (lub jej części) - wielkość liter ma znaczenie (input typu text)
- po kategorii - powinna istnineć możlwość wybrania dowolnej kategorii z pośród istniejących  (lista rozwijana - dropdown) - **kategorie powinny być pobierane dynamicznie (przykład był pokazywany na zajęciach), będzie to konieczne aby zrealizować zadanie nr.3**
- sekcja powinna również posiadać przycisk "Wyszukaj" który będzie filtrował wyniki na podstwie wybranych wartości

# Zadanie nr.2a - Rozszerzone filtry (0.5 pkt)
Zmodyfikuj sekcję filtrów aby zawierała poniższe udoskonalenia:
- dodaj filtr "Tylko produkty spożywcze", który będzie inputem typu "checkbox"
- filtrowanie powinno się odbywać bez użycia przycisku wyszukaj - (po każdorazowej zmianie dowolnego z filtrów lista "proponowanych produktów" powinna być poddawana filtrowaniu
- podczas wyszukiwania po nazwie wielkość liter nie powinna mieć znaczenia

# Zadanie nr.3 - Dodawanie nowych produktów do listy "dostępnych produktów" (0.5pkt)
Domyślnie lista "dostępnych produktów" wyświetlana jest na podstawie danych z pliku produkty.js. Celem tego zadania jest umożliwienie użytkownikowy dodawania dodatkowych produktów do listy po lewej stronie. Dane powinny być kompletne, zatem w ramach zadania powinny powstać następujące elementy:
- pole tekstowe - nazwa
- **pole tekstowe** - kategoria - **można dodawać produkty o nowych kategorich**
- input typu "checkbox" - produkt spożywczy
- Przycisk "Dodaj" który będzie dodawał produkt do listy "proponowanych produktów"

Nowo dodane produkty powinny być w pełni interaktywne, tj. powinny działać zgodnie z zadaniami 1 oraz 2. W przypadku zadania 2 nowe kategorie powinny być widoczne na liście rozwijanej.

# Zadanie nr.4 - Odznaczanie produktów "kupionych" (0.5pkt)
Po wykonaniu zadania 1, kliknięcie na produkt z listy zakupowej (prawa kolumna) powoduje jego zniknięcie. Celem tego zadania jest rozszerzenie tej funkcjonalności o poniższą:
 - kliknięcie prawym przyciskiem myszy na element powoduje jego przekreślenie
 - ponowne kliknięcie prawym przyciskiem na przekreślony element powoduje że staje się on z powrotem nieprzekreślony
 - kliknięcie lewym przyciskiem myszy powinno usuwać element z listy (to samo zachowanie jakie posiadał prawy przycisk w zad.1)

Do zadania będziesz potrzebował pewnej modyfikacji stylu dla elementu <li>, niestety w ramach dotychczasowych zajęć nie zajmowaliśmy się stylowaniem, zatem gotowy przykład znajduje się poniżej
  ```
<li style={{"text-decoration": `${produkt.kategoria === "nabiał" ? "line-through" : "auto" }`}}> Ser </li>
  ```
Skopiuj powyższy styl tj. style={{ ... }}, wklej do swojej aplikacji w miejscu wyświetlania listy zakupowej i sprawdź czy produkty nabiałowe zostały przekreślone, jeżeli tak, możesz zabrać się za właściwą cześć zadania.
