(function(n, w, d) {
    var g = {};
    g.cid = 1002556;
    g.load_script = function(url) {
        var e = d.createElement("script");
        e.type = "text/javascript";
        e.referrerPolicy = "no-referrer-when-downgrade";
        e.async = true;
        e.src = url;
        var st = d.getElementsByTagName("script")[0];
        st.parentNode.insertBefore(e, st);
    };
    g.load_gtm = function(gid, data, dl) {
        w[dl] = w[dl] || [];
        w[dl].push({
            "itm.auto_cid": 1002556,
            "itm.auto_im_api_token": "VXoW9wEaCAYxiIkb8Mzm7Q"
        });
        if (data) {
            w[dl].push(data);
        }
        w[dl].push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
        });
        g.load_script("https://www.googletagmanager.com/gtm.js?id=" + gid + ((dl != "dataLayer") ? ("&l=" + dl) : ""));
    };
    var gp = n + ".c" + g.cid;
    w[n] = w[n] || {};
    w[n]["c" + g.cid] = g;
    g.init = function(data) {
        g.load_gtm("GTM-PLTSPQN", data, "itm_dl1_1002556");
    };
    g.ia_cb = function(p) {
        g.imid = p.imid;
        g.imid_created = p.imid_created;
        g.seids = p.segment_eids.join(",");
        if (g.seids) {
            g.seids = "," + g.seids + ",";
        }
        g.imuid = p.imuid || "";
        g.meta = p.meta || {};
        g.init({
            imid: g.imid,
            imid_created: g.imid_created,
            segment_eids: g.seids,
            imuid: g.imuid,
            meta: g.meta
        });
    };
    g.load_script("https://sync.im-apps.net/imid/segment?callback=" + gp + ".ia_cb&token=VXoW9wEaCAYxiIkb8Mzm7Q&need_created=True");
})("_itm_", window, document);