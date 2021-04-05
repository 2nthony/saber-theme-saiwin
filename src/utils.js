exports.head = function() {
  const postTitle = this.page.title
  let title = this.$siteConfig.title

  if (postTitle) {
    title = `${postTitle} - ${title}`
  }

  return { title }
}

exports.formatDate = date => {
  const d = new Date(date)
  const prefix0 = n => n < 10 ? `0${n}` : n

  const yyyy = d.getFullYear()
  const mm = prefix0(d.getMonth() + 1)
  const dd = prefix0(d.getDate())

  return `${yyyy}-${mm}-${dd}`
}
