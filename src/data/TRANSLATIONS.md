Archivos de datos localizables

He actualizado los archivos de datos para incluir dos versiones lingüísticas: `es` y `en`.

Archivos modificados:
- src/data/personalInfo.ts         → `personalInfo.es` y `personalInfo.en`
- src/data/experience.ts          → `experiences.es` y `experiences.en` (exportados como `experiences = { es: [...], en: [...] }`)
- src/data/personalProjects.ts    → `personalProjects.es` y `personalProjects.en`
- src/data/education.ts           → `education.es` / `education.en` y `certifications.es` / `certifications.en`
- src/data/techStack.ts           → `techStack.es` / `techStack.en`

Cómo corregir traducciones:
- Abre el archivo correspondiente en `src/data/`.
- Busca la sección `en:` y edita los textos en inglés que quieras corregir.
- Guarda los cambios; el sitio usa el `locale` provisto por `LanguageProvider` para seleccionar la versión.

Ejemplo:
- `personalInfo.ts` contiene `personalInfo.es` y `personalInfo.en`. Edita `personalInfo.en.summary` para ajustar la traducción de tu presentación.

Notas:
- Los componentes han sido adaptados para leer la versión apropiada según `locale`.
- Si prefieres otro formato (archivos separados por locale), puedo separarlos en `personalInfo.en.ts`/`personalInfo.es.ts`.

Si quieres, puedo:
- Separar cada idioma en archivos distintos.
- Generar un reporte con todas las frases traducidas y sus localizaciones (archivo y clave) para revisar sistemáticamente.
