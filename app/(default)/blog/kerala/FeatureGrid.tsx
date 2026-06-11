import { featuresData } from "./data/features";

const FeatureGrid = () => (
  <div className="grid sm:grid-cols-2 gap-6">
    {featuresData.map((f, i) => (
      <div key={i} className="p-6 bg-emerald-50 rounded-xl">
        <f.icon className="w-6 h-6 mb-3 text-emerald-600" />
        <h3 className="font-bold">{f.title}</h3>
        <p className="text-sm text-gray-600">{f.desc}</p>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
