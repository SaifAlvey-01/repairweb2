const services = {
  "washing-machine": {
    id: 1,
    name: "Washing Machine Repair",
    shortDesc: "Washing machine not turning on or washing machine not spinning properly. We do all washing machine repairs.",
    problems: [
        "Washing machine not turning on",
        "Washing machine not spinning",
        "Washing machine not draining",
        "Washing machine not filling with water",
        "Washing machine not heating",
        "Washing machine not completing cycle",
        "Washing machine not taking conditioner",
        "Washing machine not taking detergent",
        "Washing machine not taking softener",
        "Washing machine not taking water",
        "Washing machine not taking fabric softener",
        "Washing machine not taking powder",
        "Washing machine not taking liquid",
        "Excessive noise or vibration in washing machine",
        "Washing machine not working",
        "Washing machine not starting",
        "Washing machine not spinning properly",
        "Washing machine not draining water",
        "Washing machine not draining properly",
        "Leaking washing machine",
    ],
    desc1: "Washing Machine Repair",
    desc2: "Washing Machine Repair",
    desc3: "Washing Machine Repair",
    reasonToChooseUs: [
        "Our team of expert technicians boasts over 12 years of unparalleled expertise in the washing machine repair field. We take immense pride in being recognized as the foremost washing machine repair company in Dubai and Abu Dhabi.",
        "Our team comprises highly skilled and professional technicians who excel in inspecting, diagnosing, and effectively repairing washing machines."
    ],
  }
};

const getServiceData = (name) => {
    return services[name];
}

export default services;
export { getServiceData };
