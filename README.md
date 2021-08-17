# WIP microfrontend for Samtalestøtte podlet

#WIP App og utkast README

# Komme i gang

- Installere avhengigheter: `yarn`
- Starte appen lokalt: Her har man flere muligheter, avhengig av hva man vil.
    1. Kjøre opp utviklingserver `yarn start`
    2. Kjøre dev med `yarn run dev`
- Eventuelt starte appen med Node-serveren: `yarn run build && yarn server`
- Kjøre applikasjonen med Docker:
    1. `yarn install && yarn build`
    2. `docker build -t samtalestotte-podlet .`
    3. `docker run -d -p 3001:3001 samtalestotte-podlet`
    4. For å stoppe, kjør `docker stop <id>` med id-en fra forrige kommando

## Deploy

Main branch deployes automatisk til Prod(under arbeid).

### Hvordan deployer man en vis branch?

Oppdater filen `.github/workflows/build-deploy.yml` ved `deploy-to-dev` steg med navn til den branch-en som skal deployes


### Lenker til applikasjon

- i prod(under arbeid): https://arbeidsgiver.nav.no/samtalestotte-arbeidsgiver
- i dev miljø: https://arbeidsgiver-gcp.dev.nav.no/samtalestotte-arbeidsgiver --trenger #naisdevice kjørende se https://doc.nais.io/device/install/ for info om det

---

# Ta i bruk
Det er to visningsmodus: `PANEL_MED_IKON_OG_TEKST` og `SNAKKEBOBLE`

Import AsyncNavspa med config

```
type PodletProps = {
    visning: string | undefined;
};

const samtalestottePodletConfig = {
    appName: 'samtalestotte-podlet',
    appBaseUrl: '/samtalestotte-podlet',
    assetManifestParser,
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
```


---

# Henvendelser

## For Nav-ansatte
* Dette Git-repositoriet eies av [Team IA i Produktområde arbeidsgiver](https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/Produktomr%C3%A5de-arbeidsgiver.aspx).
* Slack-kanaler:
    * [#arbeidsgiver-teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK)
    * [#arbeidsgiver-utvikling](https://nav-it.slack.com/archives/CD4MES6BB)
    * [#arbeidsgiver-general](https://nav-it.slack.com/archives/CCM649PDH)

## For folk utenfor Nav
* Opprett gjerne en issue i Github for alle typer spørsmål
* IT-utviklerne i Github-teamet https://github.com/orgs/navikt/teams/arbeidsgiver
* IT-avdelingen i [Arbeids- og velferdsdirektoratet](https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Relatert+informasjon/arbeids-og-velferdsdirektoratet-kontorinformasjon)
