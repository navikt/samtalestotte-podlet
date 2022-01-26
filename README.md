# Microfrontend for Samtalestøtte podlet

## Komme i gang
Installere avhengigheter: `yarn`

**Starte appen lokalt:** 
`yarn start`. Applikasjon vil starte men skal ikke kunne brukes fra andre applikasjoner (som f.eks `sykefraværsstatistikk`) pga CORS restriksjoner. 

**Starte appen med Node-servere:n** 
`yarn run build && yarn serve`. Server tillater requests fra localhost:3000 (hvor `sykefraværsstatistikk` kjører f.eks)

**Kjøre applikasjonen med Docker:**
    1. `yarn install && yarn build`
    2. `docker build -t samtalestotte-podlet .`
    3. `docker run -d -p 3001:3001 samtalestotte-podlet`
    4. For å stoppe, kjør `docker stop <id>` med id-en fra forrige kommando

## Deploy
*main*-branch deployes automatisk til produksjon

For deploy til dev eller labs, oppdater filen `.github/workflows/build-deploy.yml` ved `deploy-to-dev` med navn til branchen som skal deployes.

## Lenker til applikasjon
- i prod: https://arbeidsgiver.nav.no/samtalestotte-podlet
- i dev miljø: https://arbeidsgiver-gcp.dev.nav.no/samtalestotte-podlet --trenger #naisdevice kjørende se https://doc.nais.io/device/install/ for info om det

---

## Ta i bruk
Det er to visningsmodus: `PANEL_MED_IKON_OG_TEKST` og `SNAKKEBOBLE`

_Greit å vite_ : dersom `orgnr` finnes i props blir informasjon lagret i en `samtalestotte-podlet` cookie sammen med `referrer` og `altinnRettighet`. 
Cookie blir brukt etterpå i `samtalestøtte-arbeidsgiver` for å produsere metrikker: 
```
{
  "referrer":"http://yo.ur/current/location",
  "orgnr":"999999999",
  "altinnRettighet":"avhengig_av_kontekst"
}
```

Import AsyncNavspa med config

```
type PodletProps = {
    visning: string | undefined;
    orgnr?: string;
};

const samtalestottePodletConfig = {
    appName: 'samtalestotte-podlet',
    appBaseUrl: '/samtalestotte-podlet',
    loader: <LasterInn />,
};

export const SamtalestøttePodlet =
    AsyncNavspa.importer<PodletProps>(samtalestottePodletConfig);

```

Og ta i bruk `SamtalestøttePodlet` med ønsket visningsmodus. 

```
  <SamtalestøttePodlet
    visning='PANEL_MED_IKON_OG_TEKST'
  />
   <SamtalestøttePodlet
    visning='SNAKKEBOBLE'
  />
```


---

## Henvendelser

### For Nav-ansatte
* Dette Git-repositoriet eies av [Team IA i Produktområde arbeidsgiver](https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/Produktomr%C3%A5de-arbeidsgiver.aspx).
* Slack-kanaler:
    * [#arbeidsgiver-teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK)
    * [#arbeidsgiver-utvikling](https://nav-it.slack.com/archives/CD4MES6BB)
    * [#arbeidsgiver-general](https://nav-it.slack.com/archives/CCM649PDH)

### For folk utenfor Nav
* Opprett gjerne en issue i Github for alle typer spørsmål
* IT-utviklerne i Github-teamet https://github.com/orgs/navikt/teams/arbeidsgiver
* IT-avdelingen i [Arbeids- og velferdsdirektoratet](https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Relatert+informasjon/arbeids-og-velferdsdirektoratet-kontorinformasjon)
