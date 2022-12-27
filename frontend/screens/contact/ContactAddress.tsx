export const ContactHead: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="pb-4 text-xl font-bold text-black md:text-2xl">{title}</h2>
);

const ContactField: React.FC<{ name: string; href: string; value: string }> = (props) => (
  <>
    <span className="mr-2">{props.name}</span>
    <a href={props.href} className="text-yellow-600">
      {props.value}
    </a>
    <br />
  </>
);

interface Props {
  address: string;
  email: string;
  googleMapUrl: string;
  phone: string;
  telegram: string;
}

export const ContactAddress: React.FC<Props> = (props) => {
  const { address = '', phone = '', email = '', googleMapUrl = '', telegram = '' } = props;
  return (
    <div>
      <ContactHead title="Contact Us" />

      <div>
        <ContactField name="Phone:" value={phone} href={`tel:${phone.replace(/ /g, '')}`} />
        <ContactField name="Email:" value={email} href={`mailto:${email}`} />
        <ContactField name="Telegram:" value="@LDentertainment" href={telegram} />
      </div>
      <br />

      <ContactHead title="Our Office" />
      <address className="pr-8">{address}</address>

      <iframe
        src={googleMapUrl}
        className="h-64 w-full pt-8"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
