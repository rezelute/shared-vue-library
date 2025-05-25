// Green theme
const preset1 = {
   semantic: {
      primary: {
         50: "{green.50}",
         100: "{green.100}",
         200: "{green.200}",
         300: "{green.300}",
         400: "{green.400}",
         500: "{green.500}",
         600: "{green.600}",
         700: "{green.700}",
         800: "{green.800}",
         900: "{green.900}",
         950: "{green.950}",
      },
      colorScheme: {
         light: {
            surface: {
               0: "#fff",
               50: "{amber.50}",
               100: "{zinc.100}",
               200: "{zinc.200}",
               300: "{zinc.300}",
               400: "{zinc.400}",
               500: "{zinc.500}",
               600: "{zinc.600}",
               700: "{zinc.700}",
               800: "{zinc.800}",
               900: "{zinc.900}",
               950: "{zinc.950}",
            },
         },
         dark: {
            surface: {
               0: "{amber.50}",
               50: "{slate.50}",
               100: "{slate.50}",
               200: "{slate.100}",
               300: "{slate.200}",
               400: "{slate.300}",
               500: "{slate.400}",
               600: "{slate.500}",
               700: "{slate.600}",
               800: "{slate.700}",
               900: "{slate.800}",
               950: "{slate.950}",
            },
         },
      },
   },
   components: {
      menubar: {
         colorScheme: {
            light: {
               root: {
                  background: "#fff",
               },
            },
            dark: {
               root: {
                  background: "{surface.900}",
               },
            },
         },
      },
   },
};

export const themePresets = {
   preset1,
};
