type ProductCardProps = {
  title: string;
  description: string;
  dossierType: string;
  dossierStatus: string;
  country: string;
  gmp: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  dossierType,
  dossierStatus,
  country,
  gmp,
}) => (
  <div className="p-4 border rounded-md shadow-sm">
    <div className="border-b py-5 flex justify-between items-center">
      <div>
        <div>
          <h3 className="md:text-xl text-sm font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div>
        <div>
          <button className="mt-4 w-full bg-blue-600 md:text-base text-sm text-white py-2 rounded-md">
            Send inquiry
          </button>
          <p className="text-sm text-blue-600">
            Manufacturer usually replies in 15 days
          </p>
        </div>
      </div>
    </div>
    <div className="border-b">
      <div className="flex md:text-base text-sm py-5 justify-between items-center">
        <p>Dossier type</p>
        <p className="font-semibold">{dossierType}</p>
        <p>country of origin</p>
        <p className="font-semibold">{country}</p>
      </div>
      <div className="flex py-5 md:text-base text-sm justify-between items-center">
        <p>Dossier Status</p>
        <p className="font-semibold">{dossierStatus}</p>
        <p>GMP approvals</p>
        <p className="font-semibold">{gmp}</p>
      </div>
    </div>
    <div className="py-5 md:text-base text-sm">
      <p>Manufacturer #18413</p>
      <p>
        A pharmaceutical manufacturer based in the EU that is selling its
        products in 70+ countries in Europe, CIS, Asia, North America, and
        Africa. Main therapeutic areas include dermatology, skin diseases, and
        anti-inflammatory. Key production lines are Rx. Main dosage forms are
        semi-solid forms.
      </p>
    </div>
  </div>
);

export default ProductCard;
