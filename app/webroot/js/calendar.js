(function (E, aq) {
    function q(m) {
        E.extend(true, f, m)
    }
    function e(bv, bu, br) {
        function bs(bw) {
            if (aY) {
                bc();
                bi();
                aK();
                aO(bw)
            } else {
                bq()
            }
        }
        function bq() {
            a0 = bu.theme ? "ui" : "fc";
            bv.addClass("fc");
            bu.isRTL && bv.addClass("fc-rtl");
            bu.theme && bv.addClass("ui-widget");
            aY = E("<div class='fc-content' style='position:relative'/>").prependTo(bv);
            aZ = new ay(ac, bu);
            (aQ = aZ.render()) && bv.prepend(aQ);
            a9(bu.defaultView);
            E(window).resize(bb);
            be() || bp()
        }
        function bp() {
            setTimeout(function () {
                !bl.start && be() && aO()
            }, 0)
        }
        function bm() {
            E(window).unbind("resize", bb);
            aZ.destroy();
            aY.remove();
            bv.removeClass("fc fc-rtl ui-widget")
        }
        function bn() {
            return bo.offsetWidth !== 0
        }
        function be() {
            return E("body")[0].offsetWidth !== 0
        }
        function a9(bw) {
            if (!bl || bw != bl.name) {
                aX++;
                a3();
                var by = bl,
                    bx;
                if (by) {
                    (by.beforeHide || b)();
                    az(aY, aY.height());
                    by.element.hide()
                } else {
                    az(aY, 1)
                }
                aY.css("overflow", "hidden");
                if (bl = N[bw]) {
                    bl.element.show()
                } else {
                    bl = N[bw] = new L[bw](bx = bf = E("<div class='fc-view fc-view-" + bw + "' style='position:absolute'/>").appendTo(aY), ac)
                }
                by && aZ.deactivateButton(by.name);
                aZ.activateButton(bw);
                aO();
                aY.css("overflow", "");
                by && az(aY, 1);
                bx || (bl.afterShow || b)();
                aX--
            }
        }
        function aO(bw) {
            if (bn()) {
                aX++;
                a3();
                bk === aq && bc();
                var bx = false;
                if (!bl.start || bw || bg < bl.start || bg >= bl.end) {
                    bl.render(bg, bw || 0);
                    a7(true);
                    bx = true
                } else {
                    if (bl.sizeDirty) {
                        bl.clearEvents();
                        a7();
                        bx = true
                    } else {
                        if (bl.eventsDirty) {
                            bl.clearEvents();
                            bx = true
                        }
                    }
                }
                bl.sizeDirty = false;
                bl.eventsDirty = false;
                a2(bx);
                aJ = bv.outerWidth();
                aZ.updateTitle(bl.title);
                bw = new Date;
                bw >= bl.start && bw < bl.end ? aZ.disableButton("today") : aZ.enableButton("today");
                aX--;
                bl.trigger("viewDisplay", bo)
            }
        }
        function aP() {
            bi();
            if (bn()) {
                bc();
                a7();
                a3();
                bl.clearEvents();
                bl.renderEvents(aU);
                bl.sizeDirty = false
            }
        }
        function bi() {
            E.each(N, function (bw, bx) {
                bx.sizeDirty = true
            })
        }
        function bc() {
            bk = bu.contentHeight ? bu.contentHeight : bu.height ? bu.height - (aQ ? aQ.height() : 0) - d(aY) : Math.round(aY.width() / Math.max(bu.aspectRatio, 0.5))
        }
        function a7(bw) {
            aX++;
            bl.setHeight(bk, bw);
            if (bf) {
                bf.css("position", "relative");
                bf = null
            }
            bl.setWidth(aY.width(), bw);
            aX--
        }
        function bb() {
            if (!aX) {
                if (bl.start) {
                    var bw = ++ba;
                    setTimeout(function () {
                        if (bw == ba && !aX && bn()) {
                            if (aJ != (aJ = bv.outerWidth())) {
                                aX++;
                                aP();
                                bl.trigger("windowResize", bo);
                                aX--
                            }
                        }
                    }, 200)
                } else {
                    bp()
                }
            }
        }
        function a2(bw) {
            if (!bu.lazyFetching || a5(bl.visStart, bl.visEnd)) {
                bd()
            } else {
                bw && a1()
            }
        }
        function bd() {
            aT(bl.visStart, bl.visEnd)
        }
        function a4(bw) {
            aU = bw;
            a1()
        }
        function m(bw) {
            a1(bw)
        }
        function a1(bw) {
            aK();
            if (bn()) {
                bl.clearEvents();
                bl.renderEvents(aU, bw);
                bl.eventsDirty = false
            }
        }
        function aK() {
            E.each(N, function (bw, bx) {
                bx.eventsDirty = true
            })
        }
        function bh(bw, by, bx) {
            bl.select(bw, by, bx === aq ? true : bx)
        }
        function a3() {
            bl && bl.unselect()
        }
        function aM() {
            aO(-1)
        }
        function a6() {
            aO(1)
        }
        function ab() {
            al(bg, -1);
            aO()
        }
        function aL() {
            al(bg, 1);
            aO()
        }
        function aW() {
            bg = new Date;
            aO()
        }
        function bj(bw, by, bx) {
            if (bw instanceof Date) {
                bg = S(bw)
            } else {
                aw(bg, bw, by, bx)
            }
            aO()
        }
        function aS(bw, by, bx) {
            bw !== aq && al(bg, bw);
            by !== aq && U(bg, by);
            bx !== aq && R(bg, bx);
            aO()
        }
        function bt() {
            return S(bg)
        }
        function a8() {
            return bl
        }
        function aV(bw, bx) {
            if (bx === aq) {
                return bu[bw]
            }
            if (bw == "height" || bw == "contentHeight" || bw == "aspectRatio") {
                bu[bw] = bx;
                aP()
            }
        }
        function aN(bw, bx) {
            if (bu[bw]) {
                return bu[bw].apply(bx || bo, Array.prototype.slice.call(arguments, 2))
            }
        }
        var ac = this;
        ac.options = bu;
        ac.render = bs;
        ac.destroy = bm;
        ac.refetchEvents = bd;
        ac.reportEvents = a4;
        ac.reportEventChange = m;
        ac.rerenderEvents = a1;
        ac.changeView = a9;
        ac.select = bh;
        ac.unselect = a3;
        ac.prev = aM;
        ac.next = a6;
        ac.prevYear = ab;
        ac.nextYear = aL;
        ac.today = aW;
        ac.gotoDate = bj;
        ac.incrementDate = aS;
        ac.formatDate = function (bw, bx) {
            return af(bw, bx, bu)
        };
        ac.formatDates = function (bw, by, bx) {
            return G(bw, by, bx, bu)
        };
        ac.getDate = bt;
        ac.getView = a8;
        ac.option = aV;
        ac.trigger = aN;
        aa.call(ac, bu, br);
        var a5 = ac.isFetchNeeded,
            aT = ac.fetchEvents,
            bo = bv[0],
            aZ, aQ, aY, a0, bl, N = {}, aJ, bk, bf, ba = 0,
            aX = 0,
            bg = new Date,
            aU = [],
            aR;
        aw(bg, bu.year, bu.month, bu.date);
        bu.droppable && E(document).bind("dragstart", function (bx, bA) {
            var bz = bx.target,
                by = E(bz);
            if (!by.parents(".fc").length) {
                var bw = bu.dropAccept;
                if (E.isFunction(bw) ? bw.call(bz, by) : by.is(bw)) {
                    aR = bz;
                    bl.dragStart(aR, bx, bA)
                }
            }
        }).bind("dragstop", function (bw, bx) {
            if (aR) {
                bl.dragStop(aR, bw, bx);
                aR = null
            }
        })
    }
    function ay(aQ, aP) {
        function aM() {
            m = aP.theme ? "ui" : "fc";
            if (aP.header) {
                return aJ = E("<table class='fc-header' style='width:100%'/>").append(E("<tr/>").append(aL("left")).append(aL("center")).append(aL("right")))
            }
        }
        function aN() {
            aJ.remove()
        }
        function aL(aS) {
            var aT = E("<td class='fc-header-" + aS + "'/>");
            (aS = aP.header[aS]) && E.each(aS.split(" "), function (aU) {
                aU > 0 && aT.append("<span class='fc-header-space'/>");
                var aV;
                E.each(this.split(","), function (a0, aX) {
                    if (aX == "title") {
                        aT.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
                        aV && aV.addClass(m + "-corner-right");
                        aV = null
                    } else {
                        var aW;
                        if (aQ[aX]) {
                            aW = aQ[aX]
                        } else {
                            if (L[aX]) {
                                aW = function () {
                                    aY.removeClass(m + "-state-hover");
                                    aQ.changeView(aX)
                                }
                            }
                        } if (aW) {
                            a0 = aP.theme ? u(aP.buttonIcons, aX) : null;
                            var aZ = u(aP.buttonText, aX),
                                aY = E("<span class='fc-button fc-button-" + aX + " " + m + "-state-default'><span class='fc-button-inner'><span class='fc-button-content'>" + (a0 ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + a0 + "'/></span>" : aZ) + "</span><span class='fc-button-effect'><span></span></span></span></span>");
                            if (aY) {
                                aY.click(function () {
                                    aY.hasClass(m + "-state-disabled") || aW()
                                }).mousedown(function () {
                                    aY.not("." + m + "-state-active").not("." + m + "-state-disabled").addClass(m + "-state-down")
                                }).mouseup(function () {
                                    aY.removeClass(m + "-state-down")
                                }).hover(function () {
                                    aY.not("." + m + "-state-active").not("." + m + "-state-disabled").addClass(m + "-state-hover")
                                }, function () {
                                    aY.removeClass(m + "-state-hover").removeClass(m + "-state-down")
                                }).appendTo(aT);
                                aV || aY.addClass(m + "-corner-left");
                                aV = aY
                            }
                        }
                    }
                });
                aV && aV.addClass(m + "-corner-right")
            });
            return aT
        }
        function aK(aS) {
            aJ.find("h2").html(aS)
        }
        function N(aS) {
            aJ.find("span.fc-button-" + aS).addClass(m + "-state-active")
        }
        function ac(aS) {
            aJ.find("span.fc-button-" + aS).removeClass(m + "-state-active")
        }
        function aR(aS) {
            aJ.find("span.fc-button-" + aS).addClass(m + "-state-disabled")
        }
        function aO(aS) {
            aJ.find("span.fc-button-" + aS).removeClass(m + "-state-disabled")
        }
        var ab = this;
        ab.render = aM;
        ab.destroy = aN;
        ab.updateTitle = aK;
        ab.activateButton = N;
        ab.deactivateButton = ac;
        ab.disableButton = aR;
        ab.enableButton = aO;
        var aJ = E([]),
            m
    }
    function aa(a7, a6) {
        function a4(bb, ba) {
            return !aV || bb < aV || ba > aL
        }
        function a5(bc, bb) {
            aV = bc;
            aL = bb;
            aM = [];
            bc = ++aO;
            aQ = bb = ab.length;
            for (var ba = 0; ba < bb; ba++) {
                a3(ab[ba], bc)
            }
        }
        function a3(bb, ba) {
            a2(bb, function (bd) {
                if (ba == aO) {
                    if (bd) {
                        for (var bc = 0; bc < bd.length; bc++) {
                            bd[bc].source = bb;
                            aY(bd[bc])
                        }
                        aM = aM.concat(bd)
                    }
                    aQ--;
                    aQ || a1(aM)
                }
            })
        }
        function a2(bh, bf) {
            var be, bc = aC.sourceFetchers,
                bg;
            for (be = 0; be < bc.length; be++) {
                bg = bc[be](bh, aV, aL, bf);
                if (bg === true) {
                    return
                } else {
                    if (typeof bg == "object") {
                        a2(bg, bf);
                        return
                    }
                }
            }
            if (be = bh.events) {
                if (E.isFunction(be)) {
                    aR();
                    be(S(aV), S(aL), function (bi) {
                        bf(bi);
                        aW()
                    })
                } else {
                    E.isArray(be) ? bf(be) : bf()
                }
            } else {
                if (bh.url) {
                    var bb = bh.success,
                        ba = bh.error,
                        bd = bh.complete;
                    be = E.extend({}, bh.data || {});
                    bc = ax(bh.startParam, a7.startParam);
                    bg = ax(bh.endParam, a7.endParam);
                    if (bc) {
                        be[bc] = Math.round(+aV / 1000)
                    }
                    if (bg) {
                        be[bg] = Math.round(+aL / 1000)
                    }
                    aR();
                    E.ajax(E.extend({}, ai, bh, {
                        data: be,
                        success: function (bj) {
                            bj = bj || [];
                            var bi = ad(bb, this, arguments);
                            if (E.isArray(bi)) {
                                bj = bi
                            }
                            bf(bj)
                        },
                        error: function () {
                            ad(ba, this, arguments);
                            bf()
                        },
                        complete: function () {
                            ad(bd, this, arguments);
                            aW()
                        }
                    }))
                } else {
                    bf()
                }
            }
        }
        function aX(ba) {
            if (ba = a0(ba)) {
                aQ++;
                a3(ba, aO)
            }
        }
        function a0(ba) {
            if (E.isFunction(ba) || E.isArray(ba)) {
                ba = {
                    events: ba
                }
            } else {
                if (typeof ba == "string") {
                    ba = {
                        url: ba
                    }
                }
            } if (typeof ba == "object") {
                a9(ba);
                ab.push(ba);
                return ba
            }
        }
        function aS(ba) {
            ab = E.grep(ab, function (bb) {
                return !aZ(bb, ba)
            });
            aM = E.grep(aM, function (bb) {
                return !aZ(bb.source, ba)
            });
            a1(aM)
        }
        function aP(bg) {
            var be, bd = aM.length,
                bc, bf = aN().defaultEventEnd,
                bb = bg.start - bg._start,
                ba = bg.end ? bg.end - (bg._end || bf(bg)) : 0;
            for (be = 0; be < bd; be++) {
                bc = aM[be];
                if (bc._id == bg._id && bc != bg) {
                    bc.start = new Date(+bc.start + bb);
                    bc.end = bg.end ? bc.end ? new Date(+bc.end + ba) : new Date(+bf(bc) + ba) : null;
                    bc.title = bg.title;
                    bc.url = bg.url;
                    bc.allDay = bg.allDay;
                    bc.className = bg.className;
                    bc.editable = bg.editable;
                    bc.color = bg.color;
                    bc.backgroudColor = bg.backgroudColor;
                    bc.borderColor = bg.borderColor;
                    bc.textColor = bg.textColor;
                    aY(bc)
                }
            }
            aY(bg);
            a1(aM)
        }
        function ac(bb, ba) {
            aY(bb);
            if (!bb.source) {
                if (ba) {
                    m.events.push(bb);
                    bb.source = m
                }
                aM.push(bb)
            }
            a1(aM)
        }
        function aJ(bc) {
            if (bc) {
                if (!E.isFunction(bc)) {
                    var bb = bc + "";
                    bc = function (bd) {
                        return bd._id == bb
                    }
                }
                aM = E.grep(aM, bc, true);
                for (ba = 0; ba < ab.length; ba++) {
                    if (E.isArray(ab[ba].events)) {
                        ab[ba].events = E.grep(ab[ba].events, bc, true)
                    }
                }
            } else {
                aM = [];
                for (var ba = 0; ba < ab.length; ba++) {
                    if (E.isArray(ab[ba].events)) {
                        ab[ba].events = []
                    }
                }
            }
            a1(aM)
        }
        function aT(ba) {
            if (E.isFunction(ba)) {
                return E.grep(aM, ba)
            } else {
                if (ba) {
                    ba += "";
                    return E.grep(aM, function (bb) {
                        return bb._id == ba
                    })
                }
            }
            return aM
        }
        function aR() {
            aU++ || a8("loading", null, true)
        }
        function aW() {
            --aU || a8("loading", null, false)
        }
        function aY(bc) {
            var bb = bc.source || {}, ba = ax(bb.ignoreTimezone, a7.ignoreTimezone);
            bc._id = bc._id || (bc.id === aq ? "_fc" + Q++ : bc.id + "");
            if (bc.date) {
                if (!bc.start) {
                    bc.start = bc.date
                }
                delete bc.date
            }
            bc._start = S(bc.start = i(bc.start, ba));
            bc.end = i(bc.end, ba);
            if (bc.end && bc.end <= bc.start) {
                bc.end = null
            }
            bc._end = bc.end ? S(bc.end) : null;
            if (bc.allDay === aq) {
                bc.allDay = ax(bb.allDayDefault, a7.allDayDefault)
            }
            if (bc.className) {
                if (typeof bc.className == "string") {
                    bc.className = bc.className.split(/\s+/)
                }
            } else {
                bc.className = []
            }
        }
        function a9(bc) {
            if (bc.className) {
                if (typeof bc.className == "string") {
                    bc.className = bc.className.split(/\s+/)
                }
            } else {
                bc.className = []
            }
            for (var bb = aC.sourceNormalizers, ba = 0; ba < bb.length; ba++) {
                bb[ba](bc)
            }
        }
        function aZ(bb, ba) {
            return bb && ba && N(bb) == N(ba)
        }
        function N(ba) {
            return (typeof ba == "object" ? ba.events || ba.url : "") || ba
        }
        var aK = this;
        aK.isFetchNeeded = a4;
        aK.fetchEvents = a5;
        aK.addEventSource = aX;
        aK.removeEventSource = aS;
        aK.updateEvent = aP;
        aK.renderEvent = ac;
        aK.removeEvents = aJ;
        aK.clientEvents = aT;
        aK.normalizeEvent = aY;
        var a8 = aK.trigger,
            aN = aK.getView,
            a1 = aK.reportEvents,
            m = {
                events: []
            }, ab = [m],
            aV, aL, aO = 0,
            aQ = 0,
            aU = 0,
            aM = [];
        for (aK = 0; aK < a6.length; aK++) {
            a0(a6[aK])
        }
    }
    function al(N, m, ab) {
        N.setFullYear(N.getFullYear() + m);
        ab || z(N);
        return N
    }
    function U(N, m, ab) {
        if (+N) {
            m = N.getMonth() + m;
            var ac = S(N);
            ac.setDate(1);
            ac.setMonth(m);
            N.setMonth(m);
            for (ab || z(N); N.getMonth() != ac.getMonth();) {
                N.setDate(N.getDate() + (N < ac ? 1 : -1))
            }
        }
        return N
    }
    function R(N, m, ab) {
        if (+N) {
            m = N.getDate() + m;
            var ac = S(N);
            ac.setHours(9);
            ac.setDate(m);
            N.setDate(m);
            ab || z(N);
            aE(N, ac)
        }
        return N
    }
    function aE(N, m) {
        if (+N) {
            for (; N.getDate() != m.getDate();) {
                N.setTime(+N + (N < m ? 1 : -1) * D)
            }
        }
    }
    function c(N, m) {
        N.setMinutes(N.getMinutes() + m);
        return N
    }
    function z(m) {
        m.setHours(0);
        m.setMinutes(0);
        m.setSeconds(0);
        m.setMilliseconds(0);
        return m
    }
    function S(N, m) {
        if (m) {
            return z(new Date(+N))
        }
        return new Date(+N)
    }
    function ag() {
        var N = 0,
            m;
        do {
            m = new Date(1970, N++, 1)
        } while (m.getHours());
        return m
    }
    function k(N, m, ab) {
        for (m = m || 1; !N.getDay() || ab && N.getDay() == 1 || !ab && N.getDay() == 6;) {
            R(N, m)
        }
        return N
    }
    function W(N, m) {
        return Math.round((S(N, true) - S(m, true)) / aB)
    }
    function aw(N, m, ab, ac) {
        if (m !== aq && m != N.getFullYear()) {
            N.setDate(1);
            N.setMonth(0);
            N.setFullYear(m)
        }
        if (ab !== aq && ab != N.getMonth()) {
            N.setDate(1);
            N.setMonth(ab)
        }
        ac !== aq && N.setDate(ac)
    }
    function i(N, m) {
        if (typeof N == "object") {
            return N
        }
        if (typeof N == "number") {
            return new Date(N * 1000)
        }
        if (typeof N == "string") {
            if (N.match(/^\d+(\.\d+)?$/)) {
                return new Date(parseFloat(N) * 1000)
            }
            if (m === aq) {
                m = true
            }
            return am(N, m) || (N ? new Date(N) : null)
        }
        return null
    }
    function am(N, m) {
        N = N.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!N) {
            return null
        }
        var ab = new Date(N[1], 0, 1);
        if (m || !N[13]) {
            m = new Date(N[1], 0, 1, 9, 0);
            if (N[3]) {
                ab.setMonth(N[3] - 1);
                m.setMonth(N[3] - 1)
            }
            if (N[5]) {
                ab.setDate(N[5]);
                m.setDate(N[5])
            }
            aE(ab, m);
            N[7] && ab.setHours(N[7]);
            N[8] && ab.setMinutes(N[8]);
            N[10] && ab.setSeconds(N[10]);
            N[12] && ab.setMilliseconds(Number("0." + N[12]) * 1000);
            aE(ab, m)
        } else {
            ab.setUTCFullYear(N[1], N[3] ? N[3] - 1 : 0, N[5] || 1);
            ab.setUTCHours(N[7] || 0, N[8] || 0, N[10] || 0, N[12] ? Number("0." + N[12]) * 1000 : 0);
            if (N[14]) {
                m = Number(N[16]) * 60 + (N[18] ? Number(N[18]) : 0);
                m *= N[15] == "-" ? 1 : -1;
                ab = new Date(+ab + m * 60 * 1000)
            }
        }
        return ab
    }
    function ao(N) {
        if (typeof N == "number") {
            return N * 60
        }
        if (typeof N == "object") {
            return N.getHours() * 60 + N.getMinutes()
        }
        if (N = N.match(/(\d+)(?::(\d+))?\s*(\w+)?/)) {
            var m = parseInt(N[1], 10);
            if (N[3]) {
                m %= 12;
                if (N[3].toLowerCase().charAt(0) == "p") {
                    m += 12
                }
            }
            return m * 60 + (N[2] ? parseInt(N[2], 10) : 0)
        }
    }
    function af(N, m, ab) {
        return G(N, null, m, ab)
    }
    function G(aP, aO, aL, aM) {
        aM = aM || f;
        var aK = aP,
            aJ = aO,
            m, ab = aL.length,
            aQ, aN, N, ac = "";
        for (m = 0; m < ab; m++) {
            aQ = aL.charAt(m);
            if (aQ == "'") {
                for (aN = m + 1; aN < ab; aN++) {
                    if (aL.charAt(aN) == "'") {
                        if (aK) {
                            ac += aN == m + 1 ? "'" : aL.substring(m + 1, aN);
                            m = aN
                        }
                        break
                    }
                }
            } else {
                if (aQ == "(") {
                    for (aN = m + 1; aN < ab; aN++) {
                        if (aL.charAt(aN) == ")") {
                            m = af(aK, aL.substring(m + 1, aN), aM);
                            if (parseInt(m.replace(/\D/, ""), 10)) {
                                ac += m
                            }
                            m = aN;
                            break
                        }
                    }
                } else {
                    if (aQ == "[") {
                        for (aN = m + 1; aN < ab; aN++) {
                            if (aL.charAt(aN) == "]") {
                                aQ = aL.substring(m + 1, aN);
                                m = af(aK, aQ, aM);
                                if (m != af(aJ, aQ, aM)) {
                                    ac += m
                                }
                                m = aN;
                                break
                            }
                        }
                    } else {
                        if (aQ == "{") {
                            aK = aO;
                            aJ = aP
                        } else {
                            if (aQ == "}") {
                                aK = aP;
                                aJ = aO
                            } else {
                                for (aN = ab; aN > m; aN--) {
                                    if (N = s[aL.substring(m, aN)]) {
                                        if (aK) {
                                            ac += N(aK, aM)
                                        }
                                        m = aN - 1;
                                        break
                                    }
                                }
                                if (aN == m) {
                                    if (aK) {
                                        ac += aQ
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return ac
    }
    function ah(m) {
        return m.end ? g(m.end, m.allDay) : R(S(m.start), 1)
    }
    function g(N, m) {
        N = S(N);
        return m || N.getHours() || N.getMinutes() ? R(N, 1) : z(N)
    }
    function aA(N, m) {
        return (m.msLength - N.msLength) * 100 + (N.event.start - m.event.start)
    }
    function V(N, m) {
        return N.end > m.start && N.start < m.end
    }
    function Y(aP, aO, aL, aM) {
        var aK = [],
            aJ, m = aP.length,
            ab, aQ, aN, N, ac;
        for (aJ = 0; aJ < m; aJ++) {
            ab = aP[aJ];
            aQ = ab.start;
            aN = aO[aJ];
            if (aN > aL && aQ < aM) {
                if (aQ < aL) {
                    aQ = S(aL);
                    N = false
                } else {
                    aQ = aQ;
                    N = true
                } if (aN > aM) {
                    aN = S(aM);
                    ac = false
                } else {
                    aN = aN;
                    ac = true
                }
                aK.push({
                    event: ab,
                    start: aQ,
                    end: aN,
                    isStart: N,
                    isEnd: ac,
                    msLength: aN - aQ
                })
            }
        }
        return aK.sort(aA)
    }
    function J(ab) {
        var m = [],
            aL, aM = ab.length,
            aK, aJ, N, ac;
        for (aL = 0; aL < aM; aL++) {
            aK = ab[aL];
            for (aJ = 0;;) {
                N = false;
                if (m[aJ]) {
                    for (ac = 0; ac < m[aJ].length; ac++) {
                        if (V(m[aJ][ac], aK)) {
                            N = true;
                            break
                        }
                    }
                }
                if (N) {
                    aJ++
                } else {
                    break
                }
            }
            if (m[aJ]) {
                m[aJ].push(aK)
            } else {
                m[aJ] = [aK]
            }
        }
        return m
    }
    function H(N, m, ab) {
        N.unbind("mouseover").mouseover(function (aK) {
            for (var aJ = aK.target, ac; aJ != this;) {
                ac = aJ;
                aJ = aJ.parentNode
            }
            if ((aJ = ac._fci) !== aq) {
                ac._fci = aq;
                ac = m[aJ];
                ab(ac.event, ac.element, ac);
                E(aK.target).trigger(aK)
            }
            aK.stopPropagation()
        })
    }
    function P(N, m, ac) {
        for (var aJ = 0, ab; aJ < N.length; aJ++) {
            ab = E(N[aJ]);
            ab.width(Math.max(0, m - x(ab, ac)))
        }
    }
    function v(N, m, ac) {
        for (var aJ = 0, ab; aJ < N.length; aJ++) {
            ab = E(N[aJ]);
            ab.height(Math.max(0, m - d(ab, ac)))
        }
    }
    function x(N, m) {
        return ak(N) + T(N) + (m ? F(N) : 0)
    }
    function ak(m) {
        return (parseFloat(E.css(m[0], "paddingLeft", true)) || 0) + (parseFloat(E.css(m[0], "paddingRight", true)) || 0)
    }
    function F(m) {
        return (parseFloat(E.css(m[0], "marginLeft", true)) || 0) + (parseFloat(E.css(m[0], "marginRight", true)) || 0)
    }
    function T(m) {
        return (parseFloat(E.css(m[0], "borderLeftWidth", true)) || 0) + (parseFloat(E.css(m[0], "borderRightWidth", true)) || 0)
    }
    function d(N, m) {
        return t(N) + h(N) + (m ? j(N) : 0)
    }
    function t(m) {
        return (parseFloat(E.css(m[0], "paddingTop", true)) || 0) + (parseFloat(E.css(m[0], "paddingBottom", true)) || 0)
    }
    function j(m) {
        return (parseFloat(E.css(m[0], "marginTop", true)) || 0) + (parseFloat(E.css(m[0], "marginBottom", true)) || 0)
    }
    function h(m) {
        return (parseFloat(E.css(m[0], "borderTopWidth", true)) || 0) + (parseFloat(E.css(m[0], "borderBottomWidth", true)) || 0)
    }
    function az(N, m) {
        m = typeof m == "number" ? m + "px" : m;
        N.each(function (ab, ac) {
            ac.style.cssText += ";min-height:" + m + ";_height:" + m
        })
    }
    function b() {}
    function aF(N, m) {
        return N - m
    }
    function ap(m) {
        return Math.max.apply(Math, m)
    }
    function O(m) {
        return (m < 10 ? "0" : "") + m
    }
    function u(N, m) {
        if (N[m] !== aq) {
            return N[m]
        }
        m = m.split(/(?=[A-Z])/);
        for (var ab = m.length - 1, ac; ab >= 0; ab--) {
            ac = N[m[ab].toLowerCase()];
            if (ac !== aq) {
                return ac
            }
        }
        return N[""]
    }
    function C(m) {
        return m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function Z(m) {
        return m.id + "/" + m.className + "/" + m.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, "")
    }
    function n(m) {
        m.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () {
            return false
        })
    }
    function aj(m) {
        m.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }
    function aH(N, m) {
        N.each(function (ab, ac) {
            ac.className = ac.className.replace(/^fc-\w*/, "fc-" + aD[m.getDay()])
        })
    }
    function K(ab, m) {
        var aK = ab.source || {}, aL = ab.color,
            aJ = aK.color,
            ac = m("eventColor"),
            N = ab.backgroundColor || aL || aK.backgroundColor || aJ || m("eventBackgroundColor") || ac;
        aL = ab.borderColor || aL || aK.borderColor || aJ || m("eventBorderColor") || ac;
        ab = ab.textColor || aK.textColor || m("eventTextColor");
        m = [];
        N && m.push("background-color:" + N);
        aL && m.push("border-color:" + aL);
        ab && m.push("color:" + ab);
        return m.join(";")
    }
    function ad(N, m, ac) {
        if (E.isFunction(N)) {
            N = [N]
        }
        if (N) {
            var aJ, ab;
            for (aJ = 0; aJ < N.length; aJ++) {
                ab = N[aJ].apply(m, ac) || ab
            }
            return ab
        }
    }
    function ax() {
        for (var m = 0; m < arguments.length; m++) {
            if (arguments[m] !== aq) {
                return arguments[m]
            }
        }
    }
    function an(ab, m) {
        function aK(aM, aO) {
            if (aO) {
                U(aM, aO);
                aM.setDate(1)
            }
            aM = S(aM, true);
            aM.setDate(1);
            aO = U(S(aM), 1);
            var aR = S(aM),
                aN = S(aO),
                aP = aJ("firstDay"),
                aQ = aJ("weekends") ? 0 : 1;
            if (aQ) {
                k(aR);
                k(aN, -1, true)
            }
            R(aR, -((aR.getDay() - Math.max(aP, aQ) + 7) % 7));
            R(aN, (7 - aN.getDay() + Math.max(aP, aQ)) % 7);
            aP = Math.round((aN - aR) / (aB * 7));
            if (aJ("weekMode") == "fixed") {
                R(aN, (6 - aP) * 7);
                aP = 6
            }
            aL.title = N(aM, aJ("titleFormat"));
            aL.start = aM;
            aL.end = aO;
            aL.visStart = aR;
            aL.visEnd = aN;
            ac(6, aP, aQ ? 5 : 7, true)
        }
        var aL = this;
        aL.render = aK;
        at.call(aL, ab, m, "month");
        var aJ = aL.opt,
            ac = aL.renderBasic,
            N = m.formatDate
    }
    function X(ab, m) {
        function aK(aM, aO) {
            aO && R(aM, aO * 7);
            aM = R(S(aM), -((aM.getDay() - aJ("firstDay") + 7) % 7));
            aO = R(S(aM), 7);
            var aQ = S(aM),
                aN = S(aO),
                aP = aJ("weekends");
            if (!aP) {
                k(aQ);
                k(aN, -1, true)
            }
            aL.title = N(aQ, R(S(aN), -1), aJ("titleFormat"));
            aL.start = aM;
            aL.end = aO;
            aL.visStart = aQ;
            aL.visEnd = aN;
            ac(1, 1, aP ? 7 : 5, false)
        }
        var aL = this;
        aL.render = aK;
        at.call(aL, ab, m, "basicWeek");
        var aJ = aL.opt,
            ac = aL.renderBasic,
            N = m.formatDates
    }
    function I(ab, m) {
        function aK(aM, aN) {
            if (aN) {
                R(aM, aN);
                aJ("weekends") || k(aM, aN < 0 ? -1 : 1)
            }
            aL.title = N(aM, aJ("titleFormat"));
            aL.start = aL.visStart = S(aM, true);
            aL.end = aL.visEnd = R(S(aL.start), 1);
            ac(1, 1, 1, false)
        }
        var aL = this;
        aL.render = aK;
        at.call(aL, ab, m, "basicDay");
        var aJ = aL.opt,
            ac = aL.renderBasic,
            N = m.formatDate
    }
    function at(bC, bB, by) {
        function bz(bE, bF, bG, bD) {
            bg = bF;
            aY = bG;
            bx();
            (bF = !a1) ? bw(bE, bD) : bd();
            bs(bF)
        }
        function bx() {
            if (bt = aT("isRTL")) {
                a0 = -1;
                N = aY - 1
            } else {
                a0 = 1;
                N = 0
            }
            a5 = aT("firstDay");
            bc = aT("weekends") ? 0 : 1;
            bf = aT("theme") ? "ui" : "fc";
            a9 = aT("columnFormat")
        }
        function bw(bE, bF) {
            var bH, bD = bf + "-widget-header",
                bG = bf + "-widget-content",
                bI;
            bH = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";
            for (bI = 0; bI < aY; bI++) {
                bH += "<th class='fc- " + bD + "'/>"
            }
            bH += "</tr></thead><tbody>";
            for (bI = 0; bI < bE; bI++) {
                bH += "<tr class='fc-week" + bI + "'>";
                for (bD = 0; bD < aY; bD++) {
                    bH += "<td class='fc- " + bG + " fc-day" + (bI * aY + bD) + "'><div>" + (bF ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
                }
                bH += "</tr>"
            }
            bH += "</tbody></table>";
            bE = E(bH).appendTo(bC);
            aU = bE.find("thead");
            bv = aU.find("th");
            a1 = bE.find("tbody");
            aR = a1.find("tr");
            aZ = a1.find("td");
            a2 = aZ.filter(":first-child");
            br = aR.eq(0).find("div.fc-day-content div");
            aj(aU.add(aU.find("tr")));
            aj(aR);
            aR.eq(0).addClass("fc-first");
            be(aZ);
            ab = E("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(bC)
        }
        function bs(bE) {
            var bF = bE || bg == 1,
                bH = bp.start.getMonth(),
                bD = z(new Date),
                bG, bJ, bI;
            bF && bv.each(function (bL, bK) {
                bG = E(bK);
                bJ = ba(bL);
                bG.html(a8(bJ, a9));
                aH(bG, bJ)
            });
            aZ.each(function (bL, bK) {
                bG = E(bK);
                bJ = ba(bL);
                bJ.getMonth() == bH ? bG.removeClass("fc-other-month") : bG.addClass("fc-other-month"); + bJ == +bD ? bG.addClass(bf + "-state-highlight fc-today") : bG.removeClass(bf + "-state-highlight fc-today");
                bG.find("div.fc-day-number").text(bJ.getDate());
                bF && aH(bG, bJ)
            });
            aR.each(function (bL, bK) {
                bI = E(bK);
                if (bL < bg) {
                    bI.show();
                    bL == bg - 1 ? bI.addClass("fc-last") : bI.removeClass("fc-last")
                } else {
                    bI.hide()
                }
            })
        }
        function bu(bE) {
            bq = bE;
            bE = bq - aU.height();
            var bF, bG, bD;
            if (aT("weekMode") == "variable") {
                bF = bG = Math.floor(bE / (bg == 1 ? 2 : 6))
            } else {
                bF = Math.floor(bE / bg);
                bG = bE - bF * (bg - 1)
            }
            a2.each(function (bH, bI) {
                if (bH < bg) {
                    bD = E(bI);
                    az(bD.find("> div"), (bH == bg - 1 ? bG : bF) - d(bD))
                }
            })
        }
        function bk(bD) {
            aK = bD;
            aS.clear();
            bl = Math.floor(aK / aY);
            P(bv.slice(0, -1), bl)
        }
        function be(bD) {
            bD.click(aP).mousedown(aJ)
        }
        function aP(bD) {
            if (!aT("selectable")) {
                var bE = parseInt(this.className.match(/fc\-day(\d+)/)[1]);
                bE = ba(bE);
                bA("dayClick", this, bE, true, bD)
            }
        }
        function aQ(bE, bF, bH) {
            bH && bm.build();
            bH = S(bp.visStart);
            for (var bD = R(S(bH), aY), bG = 0; bG < bg; bG++) {
                var bK = new Date(Math.max(bH, bE)),
                    bI = new Date(Math.min(bD, bF));
                if (bK < bI) {
                    var bJ;
                    if (bt) {
                        bJ = W(bI, bH) * a0 + N + 1;
                        bK = W(bK, bH) * a0 + N + 1
                    } else {
                        bJ = W(bK, bH);
                        bK = W(bI, bH)
                    }
                    be(bo(bG, bJ, bG, bK - 1))
                }
                R(bH, 7);
                R(bD, 7)
            }
        }
        function bo(bE, bF, bG, bD) {
            bE = bm.rect(bE, bF, bG, bD, bC);
            return aW(bE, bC)
        }
        function bi(bD) {
            return S(bD)
        }
        function bb(bD, bE) {
            aQ(bD, R(S(bE), 1), true)
        }
        function bh() {
            aO()
        }
        function a4(bE, bF, bG) {
            var bD = bn(bE);
            bA("dayClick", aZ[bD.row * aY + bD.col], bE, bF, bG)
        }
        function bj(bD, bE) {
            aV.start(function (bF) {
                aO();
                bF && bo(bF.row, bF.col, bF.row, bF.col)
            }, bE)
        }
        function a7(bE, bF, bG) {
            var bD = aV.stop();
            aO();
            if (bD) {
                bD = a6(bD);
                bA("drop", bE, bD, true, bF, bG)
            }
        }
        function m(bD) {
            return S(bD.start)
        }
        function a3(bD) {
            return aS.left(bD)
        }
        function aL(bD) {
            return aS.right(bD)
        }
        function bn(bD) {
            return {
                row: Math.floor(W(bD, bp.visStart) / 7),
                col: ac(bD.getDay())
            }
        }
        function a6(bD) {
            return aN(bD.row, bD.col)
        }
        function aN(bD, bE) {
            return R(S(bp.visStart), bD * 7 + bE * a0 + N)
        }
        function ba(bD) {
            return aN(Math.floor(bD / aY), bD % aY)
        }
        function ac(bD) {
            return (bD - Math.max(a5, bc) + aY) % aY * a0 + N
        }
        function aM(bD) {
            return aR.eq(bD)
        }
        function aX() {
            return {
                left: 0,
                right: aK
            }
        }
        var bp = this;
        bp.renderBasic = bz;
        bp.setHeight = bu;
        bp.setWidth = bk;
        bp.renderDayOverlay = aQ;
        bp.defaultSelectionEnd = bi;
        bp.renderSelection = bb;
        bp.clearSelection = bh;
        bp.reportDayClick = a4;
        bp.dragStart = bj;
        bp.dragStop = a7;
        bp.defaultEventEnd = m;
        bp.getHoverListener = function () {
            return aV
        };
        bp.colContentLeft = a3;
        bp.colContentRight = aL;
        bp.dayOfWeekCol = ac;
        bp.dateCell = bn;
        bp.cellDate = a6;
        bp.cellIsAllDay = function () {
            return true
        };
        bp.allDayRow = aM;
        bp.allDayBounds = aX;
        bp.getRowCnt = function () {
            return bg
        };
        bp.getColCnt = function () {
            return aY
        };
        bp.getColWidth = function () {
            return bl
        };
        bp.getDaySegmentContainer = function () {
            return ab
        };
        y.call(bp, bC, bB, by);
        o.call(bp);
        aI.call(bp);
        w.call(bp);
        var aT = bp.opt,
            bA = bp.trigger,
            bd = bp.clearEvents,
            aW = bp.renderOverlay,
            aO = bp.clearOverlays,
            aJ = bp.daySelectionMousedown,
            a8 = bB.formatDate,
            aU, bv, a1, aR, aZ, a2, br, ab, aK, bq, bl, bg, aY, bm, aV, aS, bt, a0, N, a5, bc, bf, a9;
        n(bC.addClass("fc-grid"));
        bm = new au(function (bE, bF) {
            var bH, bD, bG;
            bv.each(function (bJ, bI) {
                bH = E(bI);
                bD = bH.offset().left;
                if (bJ) {
                    bG[1] = bD
                }
                bG = [bD];
                bF[bJ] = bG
            });
            bG[1] = bD + bH.outerWidth();
            aR.each(function (bJ, bI) {
                if (bJ < bg) {
                    bH = E(bI);
                    bD = bH.offset().top;
                    if (bJ) {
                        bG[1] = bD
                    }
                    bG = [bD];
                    bE[bJ] = bG
                }
            });
            bG[1] = bD + bH.outerHeight()
        });
        aV = new ae(bm);
        aS = new M(function (bD) {
            return br.eq(bD)
        })
    }
    function w() {
        function a0(a4, a3) {
            ab(a4);
            aU(aX(a4), a3)
        }
        function aZ() {
            ac();
            a2().empty()
        }
        function aX(a5) {
            var a7 = a1(),
                a9 = aK(),
                a8 = S(aV.visStart);
            a9 = R(S(a8), a9);
            var be = E.map(a5, ah),
                a3, bc, bb, ba, bd, a6, a4 = [];
            for (a3 = 0; a3 < a7; a3++) {
                bc = J(Y(a5, be, a8, a9));
                for (bb = 0; bb < bc.length; bb++) {
                    ba = bc[bb];
                    for (bd = 0; bd < ba.length; bd++) {
                        a6 = ba[bd];
                        a6.row = a3;
                        a6.level = bb;
                        a4.push(a6)
                    }
                }
                R(a8, 7);
                R(a9, 7)
            }
            return a4
        }
        function aY(a4, a3, a5) {
            aN(a4) && aW(a4, a3);
            a5.isEnd && aL(a4) && m(a4, a3, a5);
            aO(a4, a3)
        }
        function aW(a4, a3) {
            var a5 = aS(),
                a6;
            a3.draggable({
                zIndex: 9,
                delay: 50,
                opacity: aQ("dragOpacity"),
                revertDuration: aQ("dragRevertDuration"),
                start: function (a7, a8) {
                    aT("eventDragStart", a3, a4, a7, a8);
                    aP(a4, a3);
                    a5.start(function (a9, bc, bb, ba) {
                        a3.draggable("option", "revert", !a9 || !bb && !ba);
                        aJ();
                        if (a9) {
                            a6 = bb * 7 + ba * (aQ("isRTL") ? -1 : 1);
                            N(R(S(a4.start), a6), R(ah(a4), a6))
                        } else {
                            a6 = 0
                        }
                    }, a7, "drag")
                },
                stop: function (a7, a8) {
                    a5.stop();
                    aJ();
                    aT("eventDragStop", a3, a4, a7, a8);
                    if (a6) {
                        aR(this, a4, a6, 0, a4.allDay, a7, a8)
                    } else {
                        a3.css("filter", "");
                        aM(a4, a3)
                    }
                }
            })
        }
        var aV = this;
        aV.renderEvents = a0;
        aV.compileDaySegs = aX;
        aV.clearEvents = aZ;
        aV.bindDaySeg = aY;
        B.call(aV);
        var aQ = aV.opt,
            aT = aV.trigger,
            aN = aV.isEventDraggable,
            aL = aV.isEventResizable,
            ab = aV.reportEvents,
            ac = aV.reportEventClear,
            aO = aV.eventElementHandlers,
            aM = aV.showEvents,
            aP = aV.hideEvents,
            aR = aV.eventDrop,
            a2 = aV.getDaySegmentContainer,
            aS = aV.getHoverListener,
            N = aV.renderDayOverlay,
            aJ = aV.clearOverlays,
            a1 = aV.getRowCnt,
            aK = aV.getColCnt,
            aU = aV.renderDaySegs,
            m = aV.resizableDayEvent
    }
    function l(ab, m) {
        function aK(aM, aO) {
            aO && R(aM, aO * 7);
            aM = R(S(aM), -((aM.getDay() - aJ("firstDay") + 7) % 7));
            aO = R(S(aM), 7);
            var aQ = S(aM),
                aN = S(aO),
                aP = aJ("weekends");
            if (!aP) {
                k(aQ);
                k(aN, -1, true)
            }
            aL.title = N(aQ, R(S(aN), -1), aJ("titleFormat"));
            aL.start = aM;
            aL.end = aO;
            aL.visStart = aQ;
            aL.visEnd = aN;
            ac(aP ? 7 : 5)
        }
        var aL = this;
        aL.render = aK;
        r.call(aL, ab, m, "agendaWeek");
        var aJ = aL.opt,
            ac = aL.renderAgenda,
            N = m.formatDates
    }
    function aG(ab, m) {
        function aK(aM, aN) {
            if (aN) {
                R(aM, aN);
                aJ("weekends") || k(aM, aN < 0 ? -1 : 1)
            }
            aN = S(aM, true);
            var aO = R(S(aN), 1);
            aL.title = N(aM, aJ("titleFormat"));
            aL.start = aL.visStart = aN;
            aL.end = aL.visEnd = aO;
            ac(1)
        }
        var aL = this;
        aL.render = aK;
        r.call(aL, ab, m, "agendaDay");
        var aJ = aL.opt,
            ac = aL.renderAgenda,
            N = m.formatDate
    }
    function r(bn, bm, bi) {
        function bj(bb) {
            bW = bb;
            bh();
            aZ ? bC() : bg();
            ba()
        }
        function bh() {
            aX = be("theme") ? "ui" : "fc";
            m = be("weekends") ? 0 : 1;
            b1 = be("firstDay");
            if (bT = be("isRTL")) {
                bX = -1;
                bO = bW - 1
            } else {
                bX = 1;
                bO = 0
            }
            aJ = ao(be("minTime"));
            bB = ao(be("maxTime"));
            bq = be("columnFormat")
        }
        function bg() {
            var cc = aX + "-widget-header",
                ce = aX + "-widget-content",
                b8, bb, b9, ca, cb, cd = be("slotMinutes") % 15 == 0;
            b8 = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis " + cc + "'>&nbsp;</th>";
            for (bb = 0; bb < bW; bb++) {
                b8 += "<th class='fc- fc-col" + bb + " " + cc + "'/>"
            }
            b8 += "<th class='fc-agenda-gutter " + cc + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + cc + "'>&nbsp;</th>";
            for (bb = 0; bb < bW; bb++) {
                b8 += "<td class='fc- fc-col" + bb + " " + ce + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
            }
            b8 += "<td class='fc-agenda-gutter " + ce + "'>&nbsp;</td></tr></tbody></table>";
            aZ = E(b8).appendTo(bn);
            bL = aZ.find("thead");
            a3 = bL.find("th").slice(1, -1);
            bG = aZ.find("tbody");
            bD = bG.find("td").slice(0, -1);
            bc = bD.find("div.fc-day-content div");
            bP = bD.eq(0);
            br = bP.find("> div");
            aj(bL.add(bL.find("tr")));
            aj(bG.add(bG.find("tr")));
            bU = bL.find("th:first");
            aT = aZ.find(".fc-agenda-gutter");
            aQ = E("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(bn);
            if (be("allDaySlot")) {
                bf = E("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(aQ);
                b8 = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + cc + " fc-agenda-axis'>" + be("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + cc + " fc-agenda-gutter'>&nbsp;</th></tr></table>";
                b4 = E(b8).appendTo(aQ);
                bY = b4.find("tr");
                a4(bY.find("td"));
                bU = bU.add(b4.find("th:first"));
                aT = aT.add(b4.find("th.fc-agenda-gutter"));
                aQ.append("<div class='fc-agenda-divider " + cc + "'><div class='fc-agenda-divider-inner'/></div>")
            } else {
                bf = E([])
            }
            aY = E("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(aQ);
            bI = E("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(aY);
            bz = E("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(bI);
            b8 = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>";
            b9 = ag();
            ca = c(S(b9), bB);
            c(b9, aJ);
            for (bb = bS = 0; b9 < ca; bb++) {
                cb = b9.getMinutes();
                b8 += "<tr class='fc-slot" + bb + " " + (!cb ? "" : "fc-minor") + "'><th class='fc-agenda-axis " + cc + "'>" + (!cd || !cb ? a2(b9, be("axisFormat")) : "&nbsp;") + "</th><td class='" + ce + "'><div style='position:relative'>&nbsp;</div></td></tr>";
                c(b9, be("slotMinutes"));
                bS++
            }
            b8 += "</tbody></table>";
            bv = E(b8).appendTo(bI);
            N = bv.find("div:first");
            a0(bv.find("td"));
            bU = bU.add(bv.find("th:first"))
        }
        function ba() {
            var ca, cb, b8, bb, b9 = z(new Date);
            for (ca = 0; ca < bW; ca++) {
                bb = bp(ca);
                cb = a3.eq(ca);
                cb.html(a2(bb, bq));
                b8 = bD.eq(ca); + bb == +b9 ? b8.addClass(aX + "-state-highlight fc-today") : b8.removeClass(aX + "-state-highlight fc-today");
                aH(cb.add(b8), bb)
            }
        }
        function bd(b9, ca) {
            if (b9 === aq) {
                b9 = aW
            }
            aW = b9;
            bo = {};
            var b8 = bG.position().top,
                bb = aY.position().top;
            b9 = Math.min(b9 - b8, bv.height() + bb + 1);
            br.height(b9 - d(bP));
            aQ.css("top", b8);
            aY.height(b9 - bb - 1);
            aN = N.height() + 1;
            ca && aV()
        }
        function a1(bb) {
            b5 = bb;
            a6.clear();
            b7 = 0;
            P(bU.width("").each(function (b9, b8) {
                b7 = Math.max(b7, E(b8).outerWidth())
            }), b7);
            bb = aY[0].clientWidth;
            if (aS = aY.width() - bb) {
                P(aT, aS);
                aT.show().prev().removeClass("fc-last")
            } else {
                aT.hide().prev().addClass("fc-last")
            }
            aO = Math.floor((bb - b7) / bW);
            P(a3.slice(0, -1), aO)
        }
        function aV() {
            function b9() {
                aY.scrollTop(bb)
            }
            var ca = ag(),
                b8 = S(ca);
            b8.setHours(be("firstHour"));
            var bb = a9(ca, b8) + 1;
            b9();
            setTimeout(b9, 0)
        }
        function by() {
            aM = aY.scrollTop()
        }
        function bA() {
            aY.scrollTop(aM)
        }
        function a4(bb) {
            bb.click(b3).mousedown(bu)
        }
        function a0(bb) {
            bb.click(b3).mousedown(bJ)
        }
        function b3(ca) {
            if (!be("selectable")) {
                var cb = Math.min(bW - 1, Math.floor((ca.pageX - aZ.offset().left - b7) / aO)),
                    b8 = bp(cb),
                    bb = this.parentNode.className.match(/fc-slot(\d+)/);
                if (bb) {
                    bb = parseInt(bb[1]) * be("slotMinutes");
                    var b9 = Math.floor(bb / 60);
                    b8.setHours(b9);
                    b8.setMinutes(bb % 60 + aJ);
                    bQ("dayClick", bD[cb], b8, false, ca)
                } else {
                    bQ("dayClick", bD[cb], b8, true, ca)
                }
            }
        }
        function bk(b9, ca, b8) {
            b8 && b0.build();
            var bb = S(bF.visStart);
            if (bT) {
                b8 = W(ca, bb) * bX + bO + 1;
                b9 = W(b9, bb) * bX + bO + 1
            } else {
                b8 = W(b9, bb);
                b9 = W(ca, bb)
            }
            b8 = Math.max(0, b8);
            b9 = Math.min(bW, b9);
            b8 < b9 && a4(bV(0, b8, 0, b9 - 1))
        }
        function bV(b9, ca, b8, bb) {
            b9 = b0.rect(b9, ca, b8, bb, aQ);
            return bM(b9, aQ)
        }
        function b6(cc, ce) {
            for (var b8 = S(bF.visStart), bb = R(S(b8), 1), b9 = 0; b9 < bW; b9++) {
                var ca = new Date(Math.max(b8, cc)),
                    cb = new Date(Math.min(bb, ce));
                if (ca < cb) {
                    var cd = b9 * bX + bO;
                    cd = b0.rect(0, cd, 0, cd, bI);
                    ca = a9(b8, ca);
                    cb = a9(b8, cb);
                    cd.top = ca;
                    cd.height = cb - ca;
                    a0(bM(cd, bI))
                }
                R(b8, 1);
                R(bb, 1)
            }
        }
        function bZ(bb) {
            return a6.left(bb)
        }
        function bH(bb) {
            return a6.right(bb)
        }
        function aP(bb) {
            return {
                row: Math.floor(W(bb, bF.visStart) / 7),
                col: bw(bb.getDay())
            }
        }
        function bN(bb) {
            var b8 = bp(bb.col);
            bb = bb.row;
            be("allDaySlot") && bb--;
            bb >= 0 && c(b8, aJ + bb * be("slotMinutes"));
            return b8
        }
        function bp(bb) {
            return R(S(bF.visStart), bb * bX + bO)
        }
        function aR(bb) {
            return be("allDaySlot") && !bb.row
        }
        function bw(bb) {
            return (bb - Math.max(b1, m) + bW) % bW * bX + bO
        }
        function a9(b9, ca) {
            b9 = S(b9, true);
            if (ca < c(S(b9), aJ)) {
                return 0
            }
            if (ca >= c(S(b9), bB)) {
                return bv.height()
            }
            b9 = be("slotMinutes");
            ca = ca.getHours() * 60 + ca.getMinutes() - aJ;
            var b8 = Math.floor(ca / b9),
                bb = bo[b8];
            if (bb === aq) {
                bb = bo[b8] = bv.find("tr:eq(" + b8 + ") td div")[0].offsetTop
            }
            return Math.max(0, Math.round(bb - 1 + aN * (ca % b9 / b9)))
        }
        function ab() {
            return {
                left: b7,
                right: b5 - aS
            }
        }
        function ac() {
            return bY
        }
        function bK(bb) {
            var b8 = S(bb.start);
            if (bb.allDay) {
                return b8
            }
            return c(b8, be("defaultEventMinutes"))
        }
        function a5(bb, b8) {
            if (b8) {
                return S(bb)
            }
            return c(S(bb), be("slotMinutes"))
        }
        function bE(b8, b9, bb) {
            if (bb) {
                be("allDaySlot") && bk(b8, R(S(b9), 1), true)
            } else {
                bl(b8, b9)
            }
        }
        function bl(cb, cc) {
            var b8 = be("selectHelper");
            b0.build();
            if (b8) {
                var bb = W(cb, bF.visStart) * bX + bO;
                if (bb >= 0 && bb < bW) {
                    bb = b0.rect(0, bb, 0, bb, bI);
                    var b9 = a9(cb, cb),
                        ca = a9(cb, cc);
                    if (ca > b9) {
                        bb.top = b9;
                        bb.height = ca - b9;
                        bb.left += 2;
                        bb.width -= 5;
                        if (E.isFunction(b8)) {
                            if (cb = b8(cb, cc)) {
                                bb.position = "absolute";
                                bb.zIndex = 8;
                                aK = E(cb).css(bb).appendTo(bI)
                            }
                        } else {
                            bb.isStart = true;
                            bb.isEnd = true;
                            aK = E(a7({
                                title: "",
                                start: cb,
                                end: cc,
                                className: ["fc-select-helper"],
                                editable: false
                            }, bb));
                            aK.css("opacity", be("dragOpacity"))
                        } if (aK) {
                            a0(aK);
                            bI.append(aK);
                            P(aK, bb.width, true);
                            v(aK, bb.height, true)
                        }
                    }
                }
            } else {
                b6(cb, cc)
            }
        }
        function aU() {
            bR();
            if (aK) {
                aK.remove();
                aK = null
            }
        }
        function bJ(bb) {
            if (bb.which == 1 && be("selectable")) {
                bs(bb);
                var b8;
                aL.start(function (ca, b9) {
                    aU();
                    if (ca && ca.col == b9.col && !aR(ca)) {
                        b9 = bN(b9);
                        ca = bN(ca);
                        b8 = [b9, c(S(b9), be("slotMinutes")), ca, c(S(ca), be("slotMinutes"))].sort(aF);
                        bl(b8[0], b8[3])
                    } else {
                        b8 = null
                    }
                }, bb);
                E(document).one("mouseup", function (b9) {
                    aL.stop();
                    if (b8) {
                        +b8[0] == +b8[1] && bx(b8[0], false, b9);
                        a8(b8[0], b8[3], false, b9)
                    }
                })
            }
        }
        function bx(b8, b9, bb) {
            bQ("dayClick", bD[bw(b8.getDay())], b8, b9, bb)
        }
        function bt(bb, b8) {
            aL.start(function (ca) {
                bR();
                if (ca) {
                    if (aR(ca)) {
                        bV(ca.row, ca.col, ca.row, ca.col)
                    } else {
                        ca = bN(ca);
                        var b9 = c(S(ca), be("defaultEventMinutes"));
                        b6(ca, b9)
                    }
                }
            }, b8)
        }
        function b2(b9, ca, b8) {
            var bb = aL.stop();
            bR();
            bb && bQ("drop", b9, bN(bb), aR(bb), ca, b8)
        }
        var bF = this;
        bF.renderAgenda = bj;
        bF.setWidth = a1;
        bF.setHeight = bd;
        bF.beforeHide = by;
        bF.afterShow = bA;
        bF.defaultEventEnd = bK;
        bF.timePosition = a9;
        bF.dayOfWeekCol = bw;
        bF.dateCell = aP;
        bF.cellDate = bN;
        bF.cellIsAllDay = aR;
        bF.allDayRow = ac;
        bF.allDayBounds = ab;
        bF.getHoverListener = function () {
            return aL
        };
        bF.colContentLeft = bZ;
        bF.colContentRight = bH;
        bF.getDaySegmentContainer = function () {
            return bf
        };
        bF.getSlotSegmentContainer = function () {
            return bz
        };
        bF.getMinMinute = function () {
            return aJ
        };
        bF.getMaxMinute = function () {
            return bB
        };
        bF.getBodyContent = function () {
            return bI
        };
        bF.getRowCnt = function () {
            return 1
        };
        bF.getColCnt = function () {
            return bW
        };
        bF.getColWidth = function () {
            return aO
        };
        bF.getSlotHeight = function () {
            return aN
        };
        bF.defaultSelectionEnd = a5;
        bF.renderDayOverlay = bk;
        bF.renderSelection = bE;
        bF.clearSelection = aU;
        bF.reportDayClick = bx;
        bF.dragStart = bt;
        bF.dragStop = b2;
        y.call(bF, bn, bm, bi);
        o.call(bF);
        aI.call(bF);
        ar.call(bF);
        var be = bF.opt,
            bQ = bF.trigger,
            bC = bF.clearEvents,
            bM = bF.renderOverlay,
            bR = bF.clearOverlays,
            a8 = bF.reportSelection,
            bs = bF.unselect,
            bu = bF.daySelectionMousedown,
            a7 = bF.slotSegHtml,
            a2 = bm.formatDate,
            aZ, bL, a3, bG, bD, bc, bP, br, aQ, bf, b4, bY, aY, bI, bz, bv, N, bU, aT, aK, b5, aW, b7, aO, aS, aN, aM, bW, bS, b0, aL, a6, bo = {}, aX, b1, m, bT, bX, bO, aJ, bB, bq;
        n(bn.addClass("fc-agenda"));
        b0 = new au(function (cd, ce) {
            function cg(ch) {
                return Math.max(cf, Math.min(ca, ch))
            }
            var b8, cc, cb;
            a3.each(function (ci, ch) {
                b8 = E(ch);
                cc = b8.offset().left;
                if (ci) {
                    cb[1] = cc
                }
                cb = [cc];
                ce[ci] = cb
            });
            cb[1] = cc + b8.outerWidth();
            if (be("allDaySlot")) {
                b8 = bY;
                cc = b8.offset().top;
                cd[0] = [cc, cc + b8.outerHeight()]
            }
            for (var bb = bI.offset().top, cf = aY.offset().top, ca = cf + aY.outerHeight(), b9 = 0; b9 < bS; b9++) {
                cd.push([cg(bb + aN * b9), cg(bb + aN * (b9 + 1))])
            }
        });
        aL = new ae(b0);
        a6 = new M(function (bb) {
            return bc.eq(bb)
        })
    }
    function ar() {
        function bo(bu, br) {
            a1(bu);
            var bq, bt = bu.length,
                bs = [],
                bp = [];
            for (bq = 0; bq < bt; bq++) {
                bu[bq].allDay ? bs.push(bu[bq]) : bp.push(bu[bq])
            }
            if (a8("allDaySlot")) {
                aR(bk(bs), br);
                aK()
            }
            bi(bl(bp), br)
        }
        function bn() {
            m();
            bb().empty();
            a0().empty()
        }
        function bk(bu) {
            bu = J(Y(bu, E.map(bu, ah), bc.visStart, bc.visEnd));
            var br, bq = bu.length,
                bt, bs, bp, bv = [];
            for (br = 0; br < bq; br++) {
                bt = bu[br];
                for (bs = 0; bs < bt.length; bs++) {
                    bp = bt[bs];
                    bp.row = 0;
                    bp.level = br;
                    bv.push(bp)
                }
            }
            return bv
        }
        function bl(bs) {
            var bB = a5(),
                by = ab(),
                bA = a3(),
                bq = c(S(bc.visStart), by),
                bx = E.map(bs, bj),
                bw, bv, bp, br, bz, bu, bt = [];
            for (bw = 0; bw < bB; bw++) {
                bv = J(Y(bs, bx, bq, c(S(bq), bA - by)));
                A(bv);
                for (bp = 0; bp < bv.length; bp++) {
                    br = bv[bp];
                    for (bz = 0; bz < br.length; bz++) {
                        bu = br[bz];
                        bu.col = bw;
                        bu.level = bp;
                        bt.push(bu)
                    }
                }
                R(bq, 1, true)
            }
            return bt
        }
        function bj(bp) {
            return bp.end ? S(bp.end) : c(S(bp.start), a8("defaultEventMinutes"))
        }
        function bi(bE, bB) {
            var bz, bA = bE.length,
                bD, bw, bv, bH, bC, bq, bp, bF, bG, bs = "",
                by, bx, bt = {}, br = {}, bu = a0(),
                bI;
            bz = a5();
            if (by = a8("isRTL")) {
                bx = -1;
                bI = bz - 1
            } else {
                bx = 1;
                bI = 0
            }
            for (bz = 0; bz < bA; bz++) {
                bD = bE[bz];
                bw = bD.event;
                bv = aL(bD.start, bD.start);
                bH = aL(bD.start, bD.end);
                bC = bD.col;
                bq = bD.level;
                bp = bD.forward || 0;
                bF = aU(bC * bx + bI);
                bG = bd(bC * bx + bI) - bF;
                bG = Math.min(bG - 6, bG * 0.95);
                bC = bq ? bG / (bq + bp + 1) : bp ? (bG / (bp + 1) - 6) * 2 : bG;
                bq = bF + bG / (bq + bp + 1) * bq * bx + (by ? bG - bC : 0);
                bD.top = bv;
                bD.left = bq;
                bD.outerWidth = bC;
                bD.outerHeight = bH - bv;
                bs += bf(bw, bD)
            }
            bu[0].innerHTML = bs;
            by = bu.children();
            for (bz = 0; bz < bA; bz++) {
                bD = bE[bz];
                bw = bD.event;
                bs = E(by[bz]);
                bx = a4("eventRender", bw, bw, bs);
                if (bx === false) {
                    bs.remove()
                } else {
                    if (bx && bx !== true) {
                        bs.remove();
                        bs = E(bx).css({
                            position: "absolute",
                            top: bD.top,
                            left: bD.left
                        }).appendTo(bu)
                    }
                    bD.element = bs;
                    if (bw._id === bB) {
                        ba(bw, bs, bD)
                    } else {
                        bs[0]._fci = bz
                    }
                    a2(bw, bs)
                }
            }
            H(bu, bE, ba);
            for (bz = 0; bz < bA; bz++) {
                bD = bE[bz];
                if (bs = bD.element) {
                    bw = bt[bB = bD.key = Z(bs[0])];
                    bD.vsides = bw === aq ? (bt[bB] = d(bs, true)) : bw;
                    bw = br[bB];
                    bD.hsides = bw === aq ? (br[bB] = x(bs, true)) : bw;
                    bB = bs.find("div.fc-event-content");
                    if (bB.length) {
                        bD.contentTop = bB[0].offsetTop
                    }
                }
            }
            for (bz = 0; bz < bA; bz++) {
                bD = bE[bz];
                if (bs = bD.element) {
                    bs[0].style.width = Math.max(0, bD.outerWidth - bD.hsides) + "px";
                    bt = Math.max(0, bD.outerHeight - bD.vsides);
                    bs[0].style.height = bt + "px";
                    bw = bD.event;
                    if (bD.contentTop !== aq && bt - bD.contentTop < 10) {
                        bs.find("div.fc-event-time").text(N(bw.start, a8("timeFormat")) + " - " + bw.title);
                        bs.find("div.fc-event-title").remove()
                    }
                    a4("eventAfterRender", bw, bw, bs)
                }
            }
        }
        function bf(bu, br) {
            var bq = "<",
                bt = bu.url,
                bs = K(bu, a8),
                bp = bs ? " style='" + bs + "'" : "",
                bv = ["fc-event", "fc-event-skin", "fc-event-vert"];
            a7(bu) && bv.push("fc-event-draggable");
            br.isStart && bv.push("fc-corner-top");
            br.isEnd && bv.push("fc-corner-bottom");
            bv = bv.concat(bu.className);
            if (bu.source) {
                bv = bv.concat(bu.source.className || [])
            }
            bq += bt ? "a href='" + C(bu.url) + "'" : "div";
            bq += " class='" + bv.join(" ") + "' style='position:absolute;z-index:8;top:" + br.top + "px;left:" + br.left + "px;" + bs + "'><div class='fc-event-inner fc-event-skin'" + bp + "><div class='fc-event-head fc-event-skin'" + bp + "><div class='fc-event-time'>" + C(aJ(bu.start, bu.end, a8("timeFormat"))) + "</div></div><div class='fc-event-content'><div class='fc-event-title'>" + C(bu.title) + "</div></div><div class='fc-event-bg'></div></div>";
            if (br.isEnd && aZ(bu)) {
                bq += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"
            }
            bq += "</" + (bt ? "a" : "div") + ">";
            return bq
        }
        function bg(br, bq, bp) {
            a7(br) && a6(br, bq, bp.isStart);
            bp.isEnd && aZ(br) && bm(br, bq, bp);
            aY(br, bq)
        }
        function ba(bs, bq, bp) {
            var br = bq.find("div.fc-event-time");
            a7(bs) && aO(bs, bq, br);
            bp.isEnd && aZ(bs) && aP(bs, bq, br);
            aY(bs, bq)
        }
        function a6(bs, bB, by) {
            function bA() {
                if (!bw) {
                    bB.width(bq).height("").draggable("option", "grid", null);
                    bw = true
                }
            }
            var bq, bx, bw = true,
                bv, bp = a8("isRTL") ? -1 : 1,
                br = aM(),
                bz = aT(),
                bu = aN(),
                bt = ab();
            bB.draggable({
                zIndex: 9,
                opacity: a8("dragOpacity", "month"),
                revertDuration: a8("dragRevertDuration"),
                start: function (bD, bC) {
                    a4("eventDragStart", bB, bs, bD, bC);
                    bh(bs, bB);
                    bq = bB.width();
                    br.start(function (bF, bH, bE, bG) {
                        aX();
                        if (bF) {
                            bx = false;
                            bv = bG * bp;
                            if (bF.row) {
                                if (by) {
                                    if (bw) {
                                        bB.width(bz - 10);
                                        v(bB, bu * Math.round((bs.end ? (bs.end - bs.start) / p : a8("defaultEventMinutes")) / a8("slotMinutes")));
                                        bB.draggable("option", "grid", [bz, 1]);
                                        bw = false
                                    }
                                } else {
                                    bx = true
                                }
                            } else {
                                aV(R(S(bs.start), bv), R(ah(bs), bv));
                                bA()
                            }
                            bx = bx || bw && !bv
                        } else {
                            bA();
                            bx = true
                        }
                        bB.draggable("option", "revert", bx)
                    }, bD, "drag")
                },
                stop: function (bE, bC) {
                    br.stop();
                    aX();
                    a4("eventDragStop", bB, bs, bE, bC);
                    if (bx) {
                        bA();
                        bB.css("filter", "");
                        aS(bs, bB)
                    } else {
                        var bD = 0;
                        bw || (bD = Math.round((bB.offset().top - ac().offset().top) / bu) * a8("slotMinutes") + bt - (bs.start.getHours() * 60 + bs.start.getMinutes()));
                        aW(this, bs, bv, bD, bw, bE, bC)
                    }
                }
            })
        }
        function aO(bs, bD, bA) {
            function bC(bF) {
                var bG = c(S(bs.start), bF),
                    bE;
                if (bs.end) {
                    bE = c(S(bs.end), bF)
                }
                bA.text(aJ(bG, bE, a8("timeFormat")))
            }
            function bq() {
                if (bx) {
                    bA.css("display", "");
                    bD.draggable("option", "grid", [bw, bz]);
                    bx = false
                }
            }
            var by, bx = false,
                bv, bp, br, bB = a8("isRTL") ? -1 : 1,
                bu = aM(),
                bt = a5(),
                bw = aT(),
                bz = aN();
            bD.draggable({
                zIndex: 9,
                scroll: false,
                grid: [bw, bz],
                axis: bt == 1 ? "y" : false,
                opacity: a8("dragOpacity"),
                revertDuration: a8("dragRevertDuration"),
                start: function (bE, bF) {
                    a4("eventDragStart", bD, bs, bE, bF);
                    bh(bs, bD);
                    by = bD.position();
                    bp = br = 0;
                    bu.start(function (bG, bH, bJ, bI) {
                        bD.draggable("option", "revert", !bG);
                        aX();
                        if (bG) {
                            bv = bI * bB;
                            if (a8("allDaySlot") && !bG.row) {
                                if (!bx) {
                                    bx = true;
                                    bA.hide();
                                    bD.draggable("option", "grid", null)
                                }
                                aV(R(S(bs.start), bv), R(ah(bs), bv))
                            } else {
                                bq()
                            }
                        }
                    }, bE, "drag")
                },
                drag: function (bE, bF) {
                    bp = Math.round((bF.position.top - by.top) / bz) * a8("slotMinutes");
                    if (bp != br) {
                        bx || bC(bp);
                        br = bp
                    }
                },
                stop: function (bF, bG) {
                    var bE = bu.stop();
                    aX();
                    a4("eventDragStop", bD, bs, bF, bG);
                    if (bE && (bv || bp || bx)) {
                        aW(this, bs, bv, bx ? 0 : bp, bx, bF, bG)
                    } else {
                        bq();
                        bD.css("filter", "");
                        bD.css(by);
                        bC(0);
                        aS(bs, bD)
                    }
                }
            })
        }
        function aP(bu, br, bq) {
            var bt, bs, bp = aN();
            br.resizable({
                handles: {
                    s: "div.ui-resizable-s"
                },
                grid: bp,
                start: function (bw, bv) {
                    bt = bs = 0;
                    bh(bu, br);
                    br.css("z-index", 9);
                    a4("eventResizeStart", this, bu, bw, bv)
                },
                resize: function (bw, bv) {
                    bt = Math.round((Math.max(bp, br.height()) - bv.originalSize.height) / bp);
                    if (bt != bs) {
                        bq.text(aJ(bu.start, !bt && !bu.end ? null : c(a9(bu), a8("slotMinutes") * bt), a8("timeFormat")));
                        bs = bt
                    }
                },
                stop: function (bw, bv) {
                    a4("eventResizeStop", this, bu, bw, bv);
                    if (bt) {
                        aQ(this, bu, 0, a8("slotMinutes") * bt, bw, bv)
                    } else {
                        br.css("z-index", 8);
                        aS(bu, br)
                    }
                }
            })
        }
        var bc = this;
        bc.renderEvents = bo;
        bc.compileDaySegs = bk;
        bc.clearEvents = bn;
        bc.slotSegHtml = bf;
        bc.bindDaySeg = bg;
        B.call(bc);
        var a8 = bc.opt,
            a4 = bc.trigger,
            a7 = bc.isEventDraggable,
            aZ = bc.isEventResizable,
            a9 = bc.eventEnd,
            a1 = bc.reportEvents,
            m = bc.reportEventClear,
            aY = bc.eventElementHandlers,
            aK = bc.setHeight,
            bb = bc.getDaySegmentContainer,
            a0 = bc.getSlotSegmentContainer,
            aM = bc.getHoverListener,
            a3 = bc.getMaxMinute,
            ab = bc.getMinMinute,
            aL = bc.timePosition,
            aU = bc.colContentLeft,
            bd = bc.colContentRight,
            aR = bc.renderDaySegs,
            bm = bc.resizableDayEvent,
            a5 = bc.getColCnt,
            aT = bc.getColWidth,
            aN = bc.getSlotHeight,
            ac = bc.getBodyContent,
            a2 = bc.reportEventElement,
            aS = bc.showEvents,
            bh = bc.hideEvents,
            aW = bc.eventDrop,
            aQ = bc.eventResize,
            aV = bc.renderDayOverlay,
            aX = bc.clearOverlays,
            be = bc.calendar,
            N = be.formatDate,
            aJ = be.formatDates
    }
    function A(ab) {
        var m, aK, aL, aJ, ac, N;
        for (m = ab.length - 1; m > 0; m--) {
            aJ = ab[m];
            for (aK = 0; aK < aJ.length; aK++) {
                ac = aJ[aK];
                for (aL = 0; aL < ab[m - 1].length; aL++) {
                    N = ab[m - 1][aL];
                    if (V(ac, N)) {
                        N.forward = Math.max(N.forward || 0, (ac.forward || 0) + 1)
                    }
                }
            }
        }
    }
    function y(a4, a3, a1) {
        function a2(a7, a8) {
            a7 = aN[a7];
            if (typeof a7 == "object") {
                return u(a7, a8 || a1)
            }
            return a7
        }
        function a0(a7, a8) {
            return a3.trigger.apply(a3, [a7, a8 || a5].concat(Array.prototype.slice.call(arguments, 2), [a5]))
        }
        function aZ(a7) {
            return aX(a7) && !a2("disableDragging")
        }
        function aU(a7) {
            return aX(a7) && !a2("disableResizing")
        }
        function aX(a7) {
            return ax(a7.editable, (a7.source || {}).editable, a2("editable"))
        }
        function aQ(a8) {
            ab = {};
            var a9, a7 = a8.length,
                ba;
            for (a9 = 0; a9 < a7; a9++) {
                ba = a8[a9];
                if (ab[ba._id]) {
                    ab[ba._id].push(ba)
                } else {
                    ab[ba._id] = [ba]
                }
            }
        }
        function aO(a7) {
            return a7.end ? S(a7.end) : aM(a7)
        }
        function ac(a7, a8) {
            aS.push(a8);
            if (aL[a7._id]) {
                aL[a7._id].push(a8)
            } else {
                aL[a7._id] = [a8]
            }
        }
        function aJ() {
            aS = [];
            aL = {}
        }
        function aR(a7, a8) {
            a8.click(function (a9) {
                if (!a8.hasClass("ui-draggable-dragging") && !a8.hasClass("ui-resizable-resizing")) {
                    return a0("eventClick", this, a7, a9)
                }
            }).hover(function (a9) {
                a0("eventMouseover", this, a7, a9)
            }, function (a9) {
                a0("eventMouseout", this, a7, a9)
            })
        }
        function aP(a7, a8) {
            aV(a7, a8, "show")
        }
        function aT(a7, a8) {
            aV(a7, a8, "hide")
        }
        function aV(a8, a9, a7) {
            a8 = aL[a8._id];
            var bb, ba = a8.length;
            for (bb = 0; bb < ba; bb++) {
                if (!a9 || a8[bb][0] != a9[0]) {
                    a8[bb][a7]()
                }
            }
        }
        function a6(bf, a7, bd, bb, bc, be, a9) {
            var a8 = a7.allDay,
                ba = a7._id;
            N(ab[ba], bd, bb, bc);
            a0("eventDrop", bf, a7, bd, bb, bc, function () {
                N(ab[ba], -bd, -bb, a8);
                m(ba)
            }, be, a9);
            m(ba)
        }
        function aW(ba, bb, a7, bd, bc, a9) {
            var a8 = bb._id;
            aK(ab[a8], a7, bd);
            a0("eventResize", ba, bb, a7, bd, function () {
                aK(ab[a8], -a7, -bd);
                m(a8)
            }, bc, a9);
            m(a8)
        }
        function N(ba, bb, a7, bd) {
            a7 = a7 || 0;
            for (var bc, a9 = ba.length, a8 = 0; a8 < a9; a8++) {
                bc = ba[a8];
                if (bd !== aq) {
                    bc.allDay = bd
                }
                c(R(bc.start, bb, true), a7);
                if (bc.end) {
                    bc.end = c(R(bc.end, bb, true), a7)
                }
                aY(bc, aN)
            }
        }
        function aK(a9, ba, a7) {
            a7 = a7 || 0;
            for (var bc, bb = a9.length, a8 = 0; a8 < bb; a8++) {
                bc = a9[a8];
                bc.end = c(R(aO(bc), ba, true), a7);
                aY(bc, aN)
            }
        }
        var a5 = this;
        a5.element = a4;
        a5.calendar = a3;
        a5.name = a1;
        a5.opt = a2;
        a5.trigger = a0;
        a5.isEventDraggable = aZ;
        a5.isEventResizable = aU;
        a5.reportEvents = aQ;
        a5.eventEnd = aO;
        a5.reportEventElement = ac;
        a5.reportEventClear = aJ;
        a5.eventElementHandlers = aR;
        a5.showEvents = aP;
        a5.hideEvents = aT;
        a5.eventDrop = a6;
        a5.eventResize = aW;
        var aM = a5.defaultEventEnd,
            aY = a3.normalizeEvent,
            m = a3.reportEventChange,
            ab = {}, aS = [],
            aL = {}, aN = a3.options
    }
    function B() {
        function bg(bn, bh) {
            var bo = aZ(),
                br = aU(),
                bi = aK(),
                bl = 0,
                bj, bm, bk = bn.length,
                bq, bp;
            bo[0].innerHTML = bc(bn);
            bd(bn, bo.children());
            bb(bn);
            ba(bn, bo, bh);
            a8(bn);
            a9(bn);
            a4(bn);
            bh = a0();
            for (bo = 0; bo < br; bo++) {
                bj = [];
                for (bm = 0; bm < bi; bm++) {
                    bj[bm] = 0
                }
                for (; bl < bk && (bq = bn[bl]).row == bo;) {
                    bm = ap(bj.slice(bq.startCol, bq.endCol));
                    bq.top = bm;
                    bm += bq.outerHeight;
                    for (bp = bq.startCol; bp < bq.endCol; bp++) {
                        bj[bp] = bm
                    }
                    bl++
                }
                bh[bo].height(ap(bj))
            }
            aN(bn, aM(bh))
        }
        function bf(bh, bl, bj) {
            var bi = E("<div/>"),
                bn = aZ(),
                bm = bh.length,
                bk;
            bi[0].innerHTML = bc(bh);
            bi = bi.children();
            bn.append(bi);
            bd(bh, bi);
            a8(bh);
            a9(bh);
            a4(bh);
            aN(bh, aM(a0()));
            bi = [];
            for (bn = 0; bn < bm; bn++) {
                if (bk = bh[bn].element) {
                    bh[bn].row === bl && bk.css("top", bj);
                    bi.push(bk[0])
                }
            }
            return E(bi)
        }
        function bc(bp) {
            var bi = aY("isRTL"),
                bq, bw = bp.length,
                bj, bm, bk, bn;
            bq = N();
            var bl = bq.left,
                bv = bq.right,
                bt, bu, bh, bs, br, bo = "";
            for (bq = 0; bq < bw; bq++) {
                bj = bp[bq];
                bm = bj.event;
                bn = ["fc-event", "fc-event-skin", "fc-event-hori"];
                aT(bm) && bn.push("fc-event-draggable");
                if (bi) {
                    bj.isStart && bn.push("fc-corner-right");
                    bj.isEnd && bn.push("fc-corner-left");
                    bt = a7(bj.end.getDay() - 1);
                    bu = a7(bj.start.getDay());
                    bh = bj.isEnd ? aJ(bt) : bl;
                    bs = bj.isStart ? aR(bu) : bv
                } else {
                    bj.isStart && bn.push("fc-corner-left");
                    bj.isEnd && bn.push("fc-corner-right");
                    bt = a7(bj.start.getDay());
                    bu = a7(bj.end.getDay() - 1);
                    bh = bj.isStart ? aJ(bt) : bl;
                    bs = bj.isEnd ? aR(bu) : bv
                }
                bn = bn.concat(bm.className);
                if (bm.source) {
                    bn = bn.concat(bm.source.className || [])
                }
                bk = bm.url;
                br = K(bm, aY);
                bo += bk ? "<a href='" + C(bk) + "'" : "<div";
                bo += " class='" + bn.join(" ") + "' style='position:absolute;z-index:8;left:" + bh + "px;" + br + "'><div class='fc-event-inner fc-event-skin'" + (br ? " style='" + br + "'" : "") + ">";
                if (!bm.allDay && bj.isStart) {
                    bo += "<span class='fc-event-time'>" + C(aL(bm.start, bm.end, aY("timeFormat"))) + "</span>"
                }
                bo += "<span class='fc-event-title'>" + C(bm.title) + "</span></div>";
                if (bj.isEnd && a3(bm)) {
                    bo += "<div class='ui-resizable-handle ui-resizable-" + (bi ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"
                }
                bo += "</" + (bk ? "a" : "div") + ">";
                bj.left = bh;
                bj.outerWidth = bs - bh;
                bj.startCol = bt;
                bj.endCol = bu + 1
            }
            return bo
        }
        function bd(bh, bl) {
            var bj, bi = bh.length,
                bn, bm, bk;
            for (bj = 0; bj < bi; bj++) {
                bn = bh[bj];
                bm = bn.event;
                bk = E(bl[bj]);
                bm = a1("eventRender", bm, bm, bk);
                if (bm === false) {
                    bk.remove()
                } else {
                    if (bm && bm !== true) {
                        bm = E(bm).css({
                            position: "absolute",
                            left: bn.left
                        });
                        bk.replaceWith(bm);
                        bk = bm
                    }
                    bn.element = bk
                }
            }
        }
        function bb(bh) {
            var bk, bj = bh.length,
                bi, bl;
            for (bk = 0; bk < bj; bk++) {
                bi = bh[bk];
                (bl = bi.element) && m(bi.event, bl)
            }
        }
        function ba(bi, bm, bk) {
            var bj, bo = bi.length,
                bn, bl, bh;
            for (bj = 0; bj < bo; bj++) {
                bn = bi[bj];
                if (bl = bn.element) {
                    bh = bn.event;
                    if (bh._id === bk) {
                        aQ(bh, bl, bn)
                    } else {
                        bl[0]._fci = bj
                    }
                }
            }
            H(bm, bi, aQ)
        }
        function a8(bi) {
            var bm, bk = bi.length,
                bj, bo, bn, bl, bh = {};
            for (bm = 0; bm < bk; bm++) {
                bj = bi[bm];
                if (bo = bj.element) {
                    bn = bj.key = Z(bo[0]);
                    bl = bh[bn];
                    if (bl === aq) {
                        bl = bh[bn] = x(bo, true)
                    }
                    bj.hsides = bl
                }
            }
        }
        function a9(bh) {
            var bk, bj = bh.length,
                bi, bl;
            for (bk = 0; bk < bj; bk++) {
                bi = bh[bk];
                if (bl = bi.element) {
                    bl[0].style.width = Math.max(0, bi.outerWidth - bi.hsides) + "px"
                }
            }
        }
        function a4(bi) {
            var bm, bk = bi.length,
                bj, bo, bn, bl, bh = {};
            for (bm = 0; bm < bk; bm++) {
                bj = bi[bm];
                if (bo = bj.element) {
                    bn = bj.key;
                    bl = bh[bn];
                    if (bl === aq) {
                        bl = bh[bn] = j(bo)
                    }
                    bj.outerHeight = bo[0].offsetHeight + bl
                }
            }
        }
        function a0() {
            var bh, bj = aU(),
                bi = [];
            for (bh = 0; bh < bj; bh++) {
                bi[bh] = aX(bh).find("td:first div.fc-day-content > div")
            }
            return bi
        }
        function aM(bh) {
            var bk, bj = bh.length,
                bi = [];
            for (bk = 0; bk < bj; bk++) {
                bi[bk] = bh[bk][0].offsetTop
            }
            return bi
        }
        function aN(bh, bk) {
            var bj, bi = bh.length,
                bm, bl;
            for (bj = 0; bj < bi; bj++) {
                bm = bh[bj];
                if (bl = bm.element) {
                    bl[0].style.top = bk[bm.row] + (bm.top || 0) + "px";
                    bm = bm.event;
                    a1("eventAfterRender", bm, bm, bl)
                }
            }
        }
        function a6(bh, bl, bj) {
            var bi = aY("isRTL"),
                bn = bi ? "w" : "e",
                bm = bl.find("div.ui-resizable-" + bn),
                bk = false;
            n(bl);
            bl.mousedown(function (bo) {
                bo.preventDefault()
            }).click(function (bo) {
                if (bk) {
                    bo.preventDefault();
                    bo.stopImmediatePropagation()
                }
            });
            bm.mousedown(function (bs) {
                function br(bA) {
                    a1("eventResizeStop", this, bh, bA);
                    E("body").css("cursor", "");
                    bz.stop();
                    aW();
                    bt && a5(this, bh, bt, 0, bA);
                    setTimeout(function () {
                        bk = false
                    }, 0)
                }
                if (bs.which == 1) {
                    bk = true;
                    var bz = a2.getHoverListener(),
                        bw = aU(),
                        by = aK(),
                        bp = bi ? -1 : 1,
                        bv = bi ? by - 1 : 0,
                        bu = bl.css("top"),
                        bt, bo, bq = E.extend({}, bh),
                        bx = aO(bh.start);
                    aP();
                    E("body").css("cursor", bn + "-resize").one("mouseup", br);
                    a1("eventResizeStart", this, bh, bs);
                    bz.start(function (bA, bC) {
                        if (bA) {
                            var bB = Math.max(bx.row, bA.row);
                            bA = bA.col;
                            if (bw == 1) {
                                bB = 0
                            }
                            if (bB == bx.row) {
                                bA = bi ? Math.min(bx.col, bA) : Math.max(bx.col, bA)
                            }
                            bt = bB * 7 + bA * bp + bv - (bC.row * 7 + bC.col * bp + bv);
                            bC = R(aV(bh), bt, true);
                            if (bt) {
                                bq.end = bC;
                                bB = bo;
                                bo = bf(be([bq]), bj.row, bu);
                                bo.find("*").css("cursor", bn + "-resize");
                                bB && bB.remove();
                                ac(bh)
                            } else {
                                if (bo) {
                                    aS(bh);
                                    bo.remove();
                                    bo = null
                                }
                            }
                            aW();
                            ab(bh.start, R(S(bC), 1))
                        }
                    }, bs)
                }
            })
        }
        var a2 = this;
        a2.renderDaySegs = bg;
        a2.resizableDayEvent = a6;
        var aY = a2.opt,
            a1 = a2.trigger,
            aT = a2.isEventDraggable,
            a3 = a2.isEventResizable,
            aV = a2.eventEnd,
            m = a2.reportEventElement,
            aS = a2.showEvents,
            ac = a2.hideEvents,
            a5 = a2.eventResize,
            aU = a2.getRowCnt,
            aK = a2.getColCnt,
            aX = a2.allDayRow,
            N = a2.allDayBounds,
            aJ = a2.colContentLeft,
            aR = a2.colContentRight,
            a7 = a2.dayOfWeekCol,
            aO = a2.dateCell,
            be = a2.compileDaySegs,
            aZ = a2.getDaySegmentContainer,
            aQ = a2.bindDaySeg,
            aL = a2.calendar.formatDates,
            ab = a2.renderDayOverlay,
            aW = a2.clearOverlays,
            aP = a2.clearSelection
    }
    function aI() {
        function aO(aR, aS, aQ) {
            aN();
            aS || (aS = ab(aR, aQ));
            aP(aR, aS, aQ);
            aK(aR, aS, aQ)
        }
        function aN(aQ) {
            if (N) {
                N = false;
                aM();
                m("unselect", null, aQ)
            }
        }
        function aK(aR, aT, aQ, aS) {
            N = true;
            m("select", null, aR, aT, aQ, aS)
        }
        function aL(aS) {
            var aU = aJ.cellDate,
                aR = aJ.cellIsAllDay,
                aT = aJ.getHoverListener(),
                aQ = aJ.reportDayClick;
            if (aS.which == 1 && ac("selectable")) {
                aN(aS);
                var aV;
                aT.start(function (aX, aW) {
                    aM();
                    if (aX && aR(aX)) {
                        aV = [aU(aW), aU(aX)].sort(aF);
                        aP(aV[0], aV[1], true)
                    } else {
                        aV = null
                    }
                }, aS);
                E(document).one("mouseup", function (aW) {
                    aT.stop();
                    if (aV) {
                        +aV[0] == +aV[1] && aQ(aV[0], true, aW);
                        aK(aV[0], aV[1], true, aW)
                    }
                })
            }
        }
        var aJ = this;
        aJ.select = aO;
        aJ.unselect = aN;
        aJ.reportSelection = aK;
        aJ.daySelectionMousedown = aL;
        var ac = aJ.opt,
            m = aJ.trigger,
            ab = aJ.defaultSelectionEnd,
            aP = aJ.renderSelection,
            aM = aJ.clearSelection,
            N = false;
        ac("selectable") && ac("unselectAuto") && E(document).mousedown(function (aQ) {
            var aR = ac("unselectCancel");
            if (aR) {
                if (E(aQ.target).parents(aR).length) {
                    return
                }
            }
            aN(aQ)
        })
    }
    function o() {
        function N(aM, aK) {
            var aL = ab.shift();
            aL || (aL = E("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));
            aL[0].parentNode != aK[0] && aL.appendTo(aK);
            aJ.push(aL.css(aM).show());
            return aL
        }
        function m() {
            for (var aK; aK = aJ.shift();) {
                ab.push(aK.hide().unbind())
            }
        }
        var ac = this;
        ac.renderOverlay = N;
        ac.clearOverlays = m;
        var aJ = [],
            ab = []
    }
    function au(N) {
        var m = this,
            ab, ac;
        m.build = function () {
            ab = [];
            ac = [];
            N(ab, ac)
        };
        m.cell = function (aO, aN) {
            var aJ = ab.length,
                aK = ac.length,
                aM, aP = -1,
                aL = -1;
            for (aM = 0; aM < aJ; aM++) {
                if (aN >= ab[aM][0] && aN < ab[aM][1]) {
                    aP = aM;
                    break
                }
            }
            for (aM = 0; aM < aK; aM++) {
                if (aO >= ac[aM][0] && aO < ac[aM][1]) {
                    aL = aM;
                    break
                }
            }
            return aP >= 0 && aL >= 0 ? {
                row: aP,
                col: aL
            } : null
        };
        m.rect = function (aN, aM, aJ, aK, aL) {
            aL = aL.offset();
            return {
                top: ab[aN][0] - aL.top,
                left: ac[aM][0] - aL.left,
                width: ac[aK][1] - ac[aM][0],
                height: ab[aJ][1] - ab[aN][0]
            }
        }
    }
    function ae(ab) {
        function m(aM) {
            a(aM);
            aM = ab.cell(aM.pageX, aM.pageY);
            if (!aM != !N || aM && (aM.row != N.row || aM.col != N.col)) {
                if (aM) {
                    ac || (ac = aM);
                    aJ(aM, ac, aM.row - ac.row, aM.col - ac.col)
                } else {
                    aJ(aM, ac)
                }
                N = aM
            }
        }
        var aK = this,
            aL, aJ, ac, N;
        aK.start = function (aM, aN, aO) {
            aJ = aM;
            ac = N = null;
            ab.build();
            m(aN);
            aL = aO || "mousemove";
            E(document).bind(aL, m)
        };
        aK.stop = function () {
            E(document).unbind(aL, m);
            return N
        }
    }
    function a(m) {
        if (m.pageX === aq) {
            m.pageX = m.originalEvent.pageX;
            m.pageY = m.originalEvent.pageY
        }
    }
    function M(N) {
        function m(aL) {
            return aK[aL] = aK[aL] || N(aL)
        }
        var aJ = this,
            aK = {}, ac = {}, ab = {};
        aJ.left = function (aL) {
            return ac[aL] = ac[aL] === aq ? m(aL).position().left : ac[aL]
        };
        aJ.right = function (aL) {
            return ab[aL] = ab[aL] === aq ? aJ.left(aL) + m(aL).width() : ab[aL]
        };
        aJ.clear = function () {
            aK = {};
            ac = {};
            ab = {}
        }
    }
    var f = {
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: true,
        allDayDefault: true,
        ignoreTimezone: true,
        lazyFetching: true,
        startParam: "start",
        endParam: "end",
        titleFormat: {
            month: "MMMM yyyy",
            week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
            day: "dddd, MMM d, yyyy"
        },
        columnFormat: {
            month: "ddd",
            week: "ddd M/d",
            day: "dddd M/d"
        },
        timeFormat: {
            "": "h(:mm)t"
        },
        isRTL: false,
        firstDay: 0,
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        buttonText: {
            prev: "&nbsp;&#9668;&nbsp;",
            next: "&nbsp;&#9658;&nbsp;",
            prevYear: "&nbsp;&lt;&lt;&nbsp;",
            nextYear: "&nbsp;&gt;&gt;&nbsp;",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        theme: false,
        buttonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e"
        },
        unselectAuto: true,
        dropAccept: "*"
    }, av = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonText: {
                prev: "&nbsp;&#9658;&nbsp;",
                next: "&nbsp;&#9668;&nbsp;",
                prevYear: "&nbsp;&gt;&gt;&nbsp;",
                nextYear: "&nbsp;&lt;&lt;&nbsp;"
            },
            buttonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w"
            }
        }, aC = E.fullCalendar = {
            version: "1.5.4"
        }, L = aC.views = {};
    E.fn.fullCalendar = function (N) {
        if (typeof N == "string") {
            var m = Array.prototype.slice.call(arguments, 1),
                ab;
            this.each(function () {
                var aJ = E.data(this, "fullCalendar");
                if (aJ && E.isFunction(aJ[N])) {
                    aJ = aJ[N].apply(aJ, m);
                    if (ab === aq) {
                        ab = aJ
                    }
                    N == "destroy" && E.removeData(this, "fullCalendar")
                }
            });
            if (ab !== aq) {
                return ab
            }
            return this
        }
        var ac = N.eventSources || [];
        delete N.eventSources;
        if (N.events) {
            ac.push(N.events);
            delete N.events
        }
        N = E.extend(true, {}, f, N.isRTL || N.isRTL === aq && f.isRTL ? av : {}, N);
        this.each(function (aK, aJ) {
            aK = E(aJ);
            aJ = new e(aK, N, ac);
            aK.data("fullCalendar", aJ);
            aJ.render()
        });
        return this
    };
    aC.sourceNormalizers = [];
    aC.sourceFetchers = [];
    var ai = {
        dataType: "json",
        cache: false
    }, Q = 1;
    aC.addDays = R;
    aC.cloneDate = S;
    aC.parseDate = i;
    aC.parseISO8601 = am;
    aC.parseTime = ao;
    aC.formatDate = af;
    aC.formatDates = G;
    var aD = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        aB = 86400000,
        D = 3600000,
        p = 60000,
        s = {
            s: function (m) {
                return m.getSeconds()
            },
            ss: function (m) {
                return O(m.getSeconds())
            },
            m: function (m) {
                return m.getMinutes()
            },
            mm: function (m) {
                return O(m.getMinutes())
            },
            h: function (m) {
                return m.getHours() % 12 || 12
            },
            hh: function (m) {
                return O(m.getHours() % 12 || 12)
            },
            H: function (m) {
                return m.getHours()
            },
            HH: function (m) {
                return O(m.getHours())
            },
            d: function (m) {
                return m.getDate()
            },
            dd: function (m) {
                return O(m.getDate())
            },
            ddd: function (N, m) {
                return m.dayNamesShort[N.getDay()]
            },
            dddd: function (N, m) {
                return m.dayNames[N.getDay()]
            },
            M: function (m) {
                return m.getMonth() + 1
            },
            MM: function (m) {
                return O(m.getMonth() + 1)
            },
            MMM: function (N, m) {
                return m.monthNamesShort[N.getMonth()]
            },
            MMMM: function (N, m) {
                return m.monthNames[N.getMonth()]
            },
            yy: function (m) {
                return (m.getFullYear() + "").substring(2)
            },
            yyyy: function (m) {
                return m.getFullYear()
            },
            t: function (m) {
                return m.getHours() < 12 ? "a" : "p"
            },
            tt: function (m) {
                return m.getHours() < 12 ? "am" : "pm"
            },
            T: function (m) {
                return m.getHours() < 12 ? "A" : "P"
            },
            TT: function (m) {
                return m.getHours() < 12 ? "AM" : "PM"
            },
            u: function (m) {
                return af(m, "yyyy-MM-dd'T'HH:mm:ss'Z'")
            },
            S: function (m) {
                m = m.getDate();
                if (m > 10 && m < 20) {
                    return "th"
                }
                return ["st", "nd", "rd"][m % 10 - 1] || "th"
            }
        };
    aC.applyAll = ad;
    L.month = an;
    L.basicWeek = X;
    L.basicDay = I;
    q({
        weekMode: "fixed"
    });
    L.agendaWeek = l;
    L.agendaDay = aG;
    q({
        allDaySlot: true,
        allDayText: "all-day",
        firstHour: 6,
        slotMinutes: 30,
        defaultEventMinutes: 120,
        axisFormat: "h(:mm)tt",
        timeFormat: {
            agenda: "h:mm{ - h:mm}"
        },
        dragOpacity: {
            agenda: 0.5
        },
        minTime: 0,
        maxTime: 24
    })
})(jQuery);

! function (a) {
    var b = function (e, d) {
        this.element = a(e);
        var c = this.element.attr("data-url");
        this.element.fullCalendar({
            eventSources: [{
                    url: c,
                    error: d.error,
                }
            ],
            timeFormat: {
                agenda: "h:mm{ - h:mm}",
                "": "h(:mm)t{ - h(:mm)t}"
            },
            loading: a.proxy(function (g, f) {
                if (g) {
                    this.element.find(".fc-content").fadeTo(0.3, 0.4);
                    this.element.find(".fc-content").disableSelection()
                } else {
                    this.element.find(".fc-content").fadeTo(0.3, 1);
                    this.element.find(".fc-content").enableSelection()
                }
            }, this),
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay"
            },
            buttonText: {
                prev: '<i class="icon-arrow-left"></i>',
                next: '<i class="icon-arrow-right"></i>'
            },
            eventClick: a.proxy(function (h, g, f) {
                if (h.data.type == "busy") {
                    this.viewBusy(h)
                } else {
                    this.viewEvent(h)
                }
            }, this),
            eventRender: function (g, f) {
                if (g.data.type == "busy") {
                    f.addClass("busy")
                } else {
                    if (g.data.multiday) {
                        f.addClass("multiday")
                    }
                    if (g.data.quantity_pending > 0) {
                        f.addClass("pending")
                    } else {
                        if (g.data.event_id) {
                            f.addClass("event")
                        }
                    }
                }
            },
            dayClick: d.dayClick
        });
		
        this.viewEventModalElement = a("<div/>").insertAfter(this.element);
		
        this.viewEventModalElement.vymodal({
            title: "Event",
            remote: d.viewEventUrl
        });
        this.viewBusyModalElement = a("<div/>").insertAfter(this.element);
					
        this.viewBusyModalElement.vymodal({
            title: "Busy",
            remote: d.viewBusyUrl
        })
    };
    b.prototype = {
        constructor: b,
        viewEvent: function (c) {
            var d = {};
            if ( !! c.data.event_id) {
                d.id = c.data.event_id
            } else {
                if ( !! c.data.scheduler_id) {
                    d.scheduler_id = c.data.scheduler_id;
                    d.start_time = c.data.start_time
                }
            }
			
            this.viewEventModalElement.vymodal("show", {
                remoteData: d
            })
        },
        viewBusy: function (c) {
            var d = {};
            d.scheduler_id = c.data.scheduler_id;
            d.start_time = c.data.start_time;
            this.viewBusyModalElement.vymodal("show", {
                remoteData: d
            })
        },
    };
    a.fn.vycalendar = function (d) {
        var c = Array.apply(null, arguments);
        c.shift();
        return this.each(function () {
            var g = a(this),
                f = g.data("vycalendar"),
                e = typeof d == "object" && d;
            if (!f) {
                g.data("vycalendar", (f = new b(this, a.extend({}, a.fn.vycalendar.defaults, e))))
            }
            if (typeof d == "string" && typeof f[d] == "function") {
                f[d].apply(f, c);
            }
        })
    };
    a.fn.vycalendar.defaults = {};
    a.fn.vycalendar.Constructor = b;
}(window.jQuery);