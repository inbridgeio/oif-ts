export enum InvoiceItemUnit {
    // Quantity in pieces
    PIECE = 'piece',

    // Flat rate (for fixed-price billing)
    FLAT_RATE = 'flat_rate',

    // Time unit (generic time unit, can be used for flexible time calculations)
    TIME_UNIT = 'time_unit',

    // Project days (for billing based on project days)
    PROJECT_DAY = 'project_day',

    // Length units
    METER = 'm',
    CENTIMETER = 'cm',
    MILLIMETER = 'mm',
    KILOMETER = 'km',
    INCH = 'in',
    FOOT = 'ft',
    YARD = 'yd',
    MILE = 'mi',

    // Weight units
    KILOGRAM = 'kg',
    GRAM = 'g',
    MILLIGRAM = 'mg',
    TON = 't',
    POUND = 'lb',
    OUNCE = 'oz',

    // Volume units
    LITER = 'L',
    MILLILITER = 'ml',
    GALLON = 'gal',
    QUART = 'qt',
    PINT = 'pt',
    CUP = 'cup',
    FLUID_OUNCE = 'fl oz',

    // Time units
    MILLISECOND = 'ms',
    SECOND = 's',
    MINUTE = 'm',
    HOUR = 'h',
    DAY = 'd',
    WEEK = 'w',
    MONTH = 'M',
    YEAR = 'y',

    // Area units
    SQUARE_METER = 'm²',
    SQUARE_CENTIMETER = 'cm²',
    SQUARE_KILOMETER = 'km²',
    SQUARE_INCH = 'in²',
    SQUARE_FOOT = 'ft²',
    SQUARE_YARD = 'yd²',
    SQUARE_MILE = 'mi²',

    // Volume (cubic) units
    CUBIC_METER = 'm³',
    CUBIC_CENTIMETER = 'cm³',
    CUBIC_KILOMETER = 'km³',
    CUBIC_INCH = 'in³',
    CUBIC_FOOT = 'ft³',
    CUBIC_YARD = 'yd³',
    CUBIC_MILE = 'mi³',

    // Speed units
    KILOMETER_PER_HOUR = 'km/h',
    MILE_PER_HOUR = 'mi/h',
    METERS_PER_SECOND = 'm/s',
    FEET_PER_SECOND = 'ft/s',
}
