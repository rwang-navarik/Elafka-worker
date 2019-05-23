

const parseByOp = (patches, rule) => patches.filter(
  patch => patch.op in rule,
)

const parseByPath = (patches, rule) => patches.filter(
  patch => patch.path in rule,
)


module.exports = {
  parseByOp,
  parseByPath,
}
