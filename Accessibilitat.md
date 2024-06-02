## Millores Realitzades

### 1. Contrast Errors

- **Descripció del Problema:** S'han detectat errors de contrast baix entre el text i el fons, fent que el contingut sigui difícil de llegir per a usuaris amb discapacitats visuals.
- **Solució Implementada:** S'han ajustat els colors del text i del fons per assegurar un contrast adequat. Els canvis específics inclouen:
  - Navbar: Canvi de colors de text i fons.
  - Títol de la pàgina: Afegir un fons negre semi-transparent darrere del text blanc.
  - Seccions del contingut: Ajustar els colors de text a gris fosc per a millor contrast.
  - Footer: Ajustar els colors dels enllaços per assegurar un contrast adequat amb el fons.

### 2. Redundant Alternative Text

- **Descripció del Problema:** S'han detectat textos alternatius redundants en les imatges, causant confusió als usuaris de lectors de pantalla.
- **Solució Implementada:** S'han ajustat els atributs `alt` de les imatges per assegurar que no siguin redundants amb el text adjacent.

### 3. Skipped Heading Level

- **Descripció del Problema:** S'han detectat nivells de títol saltats, que poden confondre als usuaris de tecnologies assistencials.
- **Solució Implementada:** S'ha revisat l'estructura de títols per assegurar una jerarquia lògica sense saltar nivells de títol.

### 4. Redundant Link

- **Descripció del Problema:** S'han detectat enllaços redundants que apunten a la mateixa URL i tenen el mateix text d'enllaç o molt similar.
- **Solució Implementada:** S'han eliminat o combinat els enllaços redundants per evitar confusions.

---
