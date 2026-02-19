import Footer from "@components/Footer";
import Header from "@components/Header";
import DefaultLayout from "Layout";

function legal() {
  return (
    <DefaultLayout header={<Header />} footer={<Footer />}>
      <div className="flex flex-col gap-10 p-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold font-heading">Mentions légales</h1>
          <h2 className="text-2xl font-semibold font-heading">
            Accès et utilisation
          </h2>
          <h3 className="text-xl font-medium font-heading">
            L&apos;accès au site de la Salaty Maroc est possible 24h/24 et
            7j/7.{" "}
          </h3>
          <p>
            Toute tentative d&apos;entraver ou de fausser le fonctionnement de
            notre système d&apos;information est passible de sanctions pénales.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-medium font-heading">
            Propriété intellectuelle du contenu
          </h3>
          <p>
            {" "}
            Sauf mention contraire, la Salaty Maroc est titulaire des droits
            d&apos;auteur sur tout le contenu figurant sur le site, notamment
            les textes, les images, les vidéos, le graphisme les logos et tout
            autre élément qui le compose.
          </p>
          <p>
            Toute utilisation non autorisée du contenu du site, notamment à des
            fins commerciales est interdite et pourra faire l&apos;objet de
            poursuites juridiques.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-medium font-heading">
            Caractère des informations présentes sur le site
          </h3>
          <p>
            {" "}
            Les informations présentes sur ce site web n&apos;ont qu&apos;un
            caractère indicatif. Ni leur contenu ni leur exactitude ne peuvent
            être garantis. Ces informations n&apos;engagent pas
            contractuellement la Salaty Maroc.
          </p>
          <p>
            La Salaty Maroc décline toute responsabilité sur les décisions qui
            pourraient être prises à partir de ces informations.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-medium font-heading">
            Protection des données personnelles
          </h3>
          <p>
            Chaque utilisateur de ce site peut être sollicité par la Salaty
            Maroc à lui communiquer des informations personnelles, telles que
            nom, prénom, adresse électronique.
          </p>
          <p>
            Ces informations sont recueillies conformément à la loi 09-08
            relative à la protection des personnes physiques à l&apos;égard du
            traitement des données à caractère personnel, et sont nécessaires
            pour vous identifier afin de vous permettre l&apos;accès aux
            services offerts en ligne.
          </p>
          <p>
            Susceptibles de faire l&apos;objet de traitements automatisés,
            lesdites informations sont destinées au seul usage de la Salaty
            Maroc, et ne seront en aucun cas ni utilisées à des fins autres que
            celles pour lesquelles elles ont été collectées, ni mises à la
            disposition de tiers.
          </p>
          <p>
            Vos informations à caractère personnel sont protégées en vertu des
            dispositions de la loi susmentionnée, laquelle loi vous octroie le
            droit à l&apos;information, le droit d&apos;accès à vos données
            personnelles, le droit de rectification et enfin le droit
            d&apos;opposition.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
export default legal;
