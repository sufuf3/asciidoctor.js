// By default automatically require Asciidoctor module unless variable AsciidoctorConfiguration.autoRequireModule is set to 'false'
if (typeof AsciidoctorConfiguration === 'undefined' || typeof AsciidoctorConfiguration.autoRequireModule === 'undefined' || Boolean(AsciidoctorConfiguration.autoRequireModule)) {
  Opal.require('asciidoctor');
}