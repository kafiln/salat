import { Heading, Stack, Text } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import DefaultLayout from "Layout";

function legal() {
  return (
    <DefaultLayout header={<Header />} footer={<Footer />}>
      <Stack spacing={10} p={4}>
        <Stack spacing={8}>
          <Heading as="h1">Mentions légales</Heading>
          <Heading as="h2">Accès et utilisation</Heading>
          <Heading as="h3">
            L’accès au site de la Salaty Maroc est possible 24h/24 et 7j/7.{" "}
          </Heading>
          <Text>
            Toute tentative d’entraver ou de fausser le fonctionnement de notre
            système d’information est passible de sanctions pénales.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading as="h3">Propriété intellectuelle du contenu</Heading>
          <Text>
            {" "}
            Sauf mention contraire, la Salaty Maroc est titulaire des droits
            d'auteur sur tout le contenu figurant sur le site, notamment les
            textes, les images, les vidéos, le graphisme les logos et tout autre
            élément qui le compose.
          </Text>
          <Text>
            Toute utilisation non autorisée du contenu du site, notamment à des
            fins commerciales est interdite et pourra faire l’objet de
            poursuites juridiques.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading as="h3">
            Caractère des informations présentes sur le site
          </Heading>
          <Text>
            {" "}
            Les informations présentes sur ce site web n'ont qu'un caractère
            indicatif. Ni leur contenu ni leur exactitude ne peuvent être
            garantis. Ces informations n'engagent pas contractuellement la
            Salaty Maroc.
          </Text>
          <Text>
            La Salaty Maroc décline toute responsabilité sur les décisions qui
            pourraient être prises à partir de ces informations.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading as="h3">Protection des données personnelles</Heading>
          <Text>
            Chaque utilisateur de ce site peut être sollicité par la Salaty
            Maroc à lui communiquer des informations personnelles, telles que
            nom, prénom, adresse électronique.
          </Text>

          <Text>
            Ces informations sont recueillies conformément à la loi 09-08
            relative à la protection des personnes physiques à l’égard du
            traitement des données à caractère personnel, et sont nécessaires
            pour vous identifier afin de vous permettre l’accès aux services
            offerts en ligne.
          </Text>

          <Text>
            Susceptibles de faire l’objet de traitements automatisés, lesdites
            informations sont destinées au seul usage de la Salaty Maroc, et ne
            seront en aucun cas ni utilisées à des fins autres que celles pour
            lesquelles elles ont été collectées, ni mises à la disposition de
            tiers.
          </Text>

          <Text>
            Vos informations à caractère personnel sont protégées en vertu des
            dispositions de la loi susmentionnée, laquelle loi vous octroie le
            droit à l’information, le droit d’accès à vos données personnelles,
            le droit de rectification et enfin le droit d’opposition.
          </Text>
        </Stack>
      </Stack>
    </DefaultLayout>
  );
}
export default legal;
