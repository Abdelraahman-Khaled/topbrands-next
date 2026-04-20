import React from 'react'

const css = () => {
  return (
    <>
      {/* white */}
      <motion.a
        whileTap={tapButtonVariants}
        href="/contact"
        className="mask-btn mask-btn--none-white"
      >
        <span className="mask-btn__label">{t("contact_syria")}</span>
        <button type="button" className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
          {t("contact_syria")}
        </button>
      </motion.a>
      {/* yellow */}
      < motion.a
        whileTap={tapButtonVariants}
        href="/become-a-partner"
        className="mask-btn mask-btn--yellow-black "
      >
        <span className="mask-btn__label" >{t("become_partner")}</span>
        <button type="button" className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
          {t("become_partner")}
        </button>
      </ motion.a>
    </>
  )
}

export default css



