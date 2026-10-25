// Language switcher. English lives in index.html; Vietnamese and Chinese are swapped in by key.
// When you change English text in index.html, update the matching key below too
// (a missing key just falls back to English).
(function () {
  var T = {
 "vi": {
  "t01": "<a href=\"#about\">Giới thiệu</a>",
  "t02": "<a href=\"#research\">Nghiên cứu</a>",
  "t03": "<a href=\"#publications\">Công bố</a>",
  "t04": "<a href=\"#community\">Cộng đồng</a>",
  "t05": "<a href=\"#teaching\">Giảng dạy</a>",
  "t06": "Ảnh: Tianyue Gao",
  "t07": "Nghiên cứu sinh Tiến sĩ Khoa học Thần kinh · Icahn School of Medicine at Mount Sinai",
  "t08": "Tôi xây dựng và đánh giá các mô hình AI để nghiên cứu não bộ và sức khỏe con người, để dịch vụ y tế tốt hơn đến được với nhiều người hơn, sớm hơn. Tôi coi trọng phương pháp nghiên cứu chặt chẽ và việc làm cho khoa học trở nên dễ hiểu với tất cả mọi người.",
  "t09": "<a href=\"mailto:joliehoang22@gmail.com\">Email</a>",
  "t10": "Giới thiệu",
  "t11": "Tôi lớn lên ở Hà Nội, Việt Nam, trong một gia đình làm nghề y, và một mình sang Mỹ năm mười bốn tuổi. Từ sớm, tôi đã thấy dịch vụ y tế đến với mọi người chậm và không đồng đều như thế nào, nhất là với những người sinh ra trong hoàn cảnh khó khăn hơn. Đó là một lý do lớn khiến tôi theo đuổi công nghệ cho sức khỏe.",
  "t12": "Trước khi chuyển sang AI, tôi được đào tạo tại Beth Israel Deaconess Medical Center và Harvard Medical School cùng <a href=\"https://www.urmc.rochester.edu/labs/lizano-lab\">Dr. Paulo Lizano</a> và <a href=\"https://sleep.hms.harvard.edu/faculty-staff/matcheri-s-keshavan\">Dr. Matcheri Keshavan</a>. Chúng tôi dùng MRI cấu trúc và kỹ thuật ASL (arterial spin labeling) để tìm các dấu ấn trên não liên quan đến mức độ nặng của triệu chứng ở các rối loạn loạn thần. Khi học thạc sĩ tại Teachers College, Columbia University, tôi tiếp tục nghiên cứu về loạn thần cùng <a href=\"https://provost.duke.edu/profile/lawrence-yang-0/\">Dr. Lawrence Yang</a>, <a href=\"https://www.columbiapsychiatry.org/profile/ragy-r-girgis-md\">Dr. Ragy Girgis</a> và <a href=\"https://www.tc.columbia.edu/faculty/rr2761/\">Dr. Randall Richardson-Vejlgaard</a>, đồng thời bắt đầu nghiên cứu sức khỏe tâm thần toàn cầu ở những cộng đồng ít được quan tâm.",
  "t13": "Hiện tôi là nghiên cứu sinh Tiến sĩ tại phòng thí nghiệm của <a href=\"https://profiles.icahn.mssm.edu/alexander-charney\">Dr. Alexander Charney</a> và <a href=\"https://profiles.icahn.mssm.edu/noam-beckmann\">Dr. Noam Beckmann</a> ở Icahn School of Medicine at Mount Sinai. Nghiên cứu của tôi kết hợp khoa học thần kinh, di truyền học và AI: tôi xây dựng các mô hình học máy trên dữ liệu máu, não và di truyền từ <a href=\"https://icahn.mssm.edu/research/friedman/living-brain\">Living Brain Project</a>, và cùng phát triển các mô hình nền tảng hệ gen (genomic foundation models) với NVIDIA và Sheba Medical Center. Vì kết quả phụ thuộc vào phương pháp, tôi đã nghiên cứu khi nào việc hiệu chỉnh các yếu tố gây nhiễu ẩn trong nghiên cứu biểu hiện gen có ích và khi nào có hại, cũng như cách đánh giá các mô hình học sâu hệ gen một cách công bằng. Tôi cũng là thành viên của một nhóm đang xây dựng và thử nghiệm một chatbot AI trị liệu cho người mắc các rối loạn loạn thần.",
  "t14": "Ngoài nghiên cứu, tôi thích đi du lịch, vận động và chơi bài. Dạo này tôi còn đang học lướt ván wakesurf, võ thuật và in 3D.",
  "t15": "Nghiên cứu",
  "t16": "Dự đoán biểu hiện gen trong não từ máu và DNA",
  "t17": "Với <a href=\"https://icahn.mssm.edu/research/friedman/living-brain\">Living Brain Project</a>, tôi nghiên cứu biểu hiện gen và protein trong mô não người còn sống qua ba dự án:",
  "t18": "<b>Từ máu đến não:</b> dùng học máy để dự đoán biểu hiện gen trong não từ dữ liệu phiên mã máu và hình ảnh não. Kết quả cho thấy những tín hiệu tương đồng máu–não mạnh nhất và lặp lại được lại không do yếu tố di truyền chi phối.",
  "t19": "<b>Từ di truyền đến não:</b> các biến thể di truyền điều hòa biểu hiện gen và protein trong não sống như thế nào.",
  "t20": "<b>Từ hệ gen đến biểu hiện gen, đánh giá công bằng:</b> so sánh các mô hình học sâu (Enformer, Basenji2, ExPecto, Xpresso) với mốc so sánh đơn giản nhất: mức biểu hiện trung bình của một gen trong quần thể.",
  "t21": "Bản thảo tác giả chính đang được bình duyệt và đang chuẩn bị.",
  "t22": "Mô hình nền tảng hệ gen",
  "t23": "Cùng NVIDIA và Sheba Medical Center, tôi là thành viên của một nhóm đưa các mô hình nền tảng hệ gen đến gần hơn với sinh học thực tế. Hầu hết các mô hình đọc DNA như một chuỗi ký tự duy nhất, vì vậy chúng tôi xây dựng các mô hình đọc cả hai bản sao hệ gen của một người (DNT), học chức năng của các đoạn DNA thay vì chỉ điền các ký tự còn thiếu (JEPA-DNA), tận dụng các tính chất vật lý và hóa học của DNA (VANDAM), cùng với một cách chuẩn hóa để đánh giá chúng công bằng (GFMBench-API).",
  "t24": "Bản thảo tác giả chính đang chuẩn bị.",
  "t25": "Tính chặt chẽ trong phân tích biểu hiện gen",
  "t26": "Thông qua mô phỏng quy mô lớn và 14 bộ dữ liệu não thuộc năm rối loạn tâm thần kinh, tôi đã chỉ ra rằng việc hiệu chỉnh biến đại diện (surrogate variable) một cách tràn lan dẫn đến quá khớp (overfitting) trong phân tích biểu hiện gen khác biệt.",
  "t27": "<a href=\"https://doi.org/10.64898/2026.10.05.756826\">Preprint</a> · <a href=\"https://github.com/BeckmannLab/sva_eval_dea_neuropsych\">Mã nguồn</a>",
  "t28": "Bản thảo tác giả chính đang được bình duyệt.",
  "t29": "Chatbot AI cho sức khỏe tâm thần",
  "t30": "Tôi là thành viên của một nhóm xây dựng chatbot AI nhằm giảm mức độ tin chắc vào hoang tưởng ở người mắc các rối loạn loạn thần. Công việc của tôi tập trung vào các cơ chế bảo vệ an toàn (safety guardrails) và dữ liệu tổng hợp, trong đó có một nghiên cứu cho thấy một tác tử an toàn độc lập giúp các mô hình ngôn ngữ phát hiện ý nghĩ tự sát.",
  "t31": "Bản thảo tác giả chính đang được bình duyệt.",
  "t32": "Sức khỏe tâm thần toàn cầu và kỳ thị",
  "t33": "Tại Columbia và NYSPI, tôi nghiên cứu cách sự kỳ thị và bối cảnh xã hội ảnh hưởng đến sức khỏe ở những cộng đồng ít được quan tâm: góp phần xây dựng cách tiếp cận “What Matters Most” (“Điều quan trọng nhất”) đối với kỳ thị giao thoa liên quan đến HIV và ung thư tại Hà Nội, Việt Nam; tổng quan tác động của đại dịch COVID-19 đến đau mạn tính và việc sử dụng opioid ở các nhóm yếu thế; và tham gia một nghiên cứu đa trung tâm về hỗ trợ xã hội và tìm kiếm sự giúp đỡ trên toàn thế giới.",
  "t34": "<a href=\"https://doi.org/10.1093/jncimonographs/lgae002\">Kỳ thị giao thoa tại Hà Nội (2024)</a> · <a href=\"https://doi.org/10.3389/fpubh.2023.1046683\">COVID-19, đau mạn tính &amp; opioid (2023)</a> · <a href=\"https://doi.org/10.1007/s12144-024-05764-5\">Hỗ trợ xã hội &amp; tìm kiếm giúp đỡ trên thế giới (2024)</a>",
  "t35": "Liên kết hình ảnh não trong loạn thần với mức độ nặng của triệu chứng",
  "t36": "Tôi đã dành sáu năm cho nghiên cứu MRI đa phương thức về loạn thần, tìm hiểu hình thái não, tưới máu não và kết nối não, cũng như mối liên hệ của chúng với tình trạng viêm, nhận thức và triệu chứng trong các nhóm nghiên cứu đa trung tâm.",
  "t37": "<a href=\"https://doi.org/10.1017/S0033291726105844\">Tưới máu não &amp; triệu chứng (2026)</a> · <a href=\"https://doi.org/10.1016/j.bbi.2021.11.019\">Viêm &amp; cấu trúc não (2022)</a> · <a href=\"https://doi.org/10.1016/j.pscychresns.2021.111249\">Đồi thị &amp; hồi hải mã theo thời gian (2021)</a>",
  "t38": "Một công cụ tôi đang xây dựng để ai cũng có thể hiểu các bài báo khoa học. Hiểu khoa học không nên đòi hỏi phải có bằng Tiến sĩ về lĩnh vực đó.",
  "t39": "Sắp ra mắt",
  "t40": "Công bố chọn lọc",
  "t41": "Danh sách đầy đủ trên <a href=\"https://scholar.google.com/citations?user=YRSLjmEAAAAJ\">Google Scholar</a>.",
  "t42": "Dự án cộng đồng",
  "t43": "Tôi đã dẫn dắt các nhóm làm ra một trò chơi thẻ bài chống phân biệt chủng tộc với người gốc Á và các đảo Thái Bình Dương (AAPI), một loạt video về sức khỏe tâm thần bằng ba thứ tiếng, và một sự kiện TEDx.",
  "t44": "Giám đốc sáng lập · 2021–2023",
  "t45": "Loạt video ngắn bằng tiếng Anh, tiếng Trung và tiếng Việt về căng thẳng, thất bại và mất mát, từ góc nhìn của người châu Á và người Mỹ gốc Á. Loạt video xem sức khỏe tâm thần là một phần của sự khỏe mạnh hằng ngày. Tôi dẫn dắt 33 tình nguyện viên và dẫn các tập tiếng Việt. Thực hiện cùng Mass General Hospital Center for Cross-Cultural Student Emotional Wellness.",
  "t46": "Xem: <a href=\"https://www.youtube.com/watch?v=ffSKiNlt5sE\">English</a> · <a href=\"https://www.youtube.com/watch?v=uVIa31i9oh8\">中文</a> · <a href=\"https://www.youtube.com/watch?v=WN85gxcj4tk\">Tiếng Việt</a> · <a href=\"https://www.youtube.com/playlist?list=PLzjwcVFqLH8YLKbET913ASS00vILoassy\">Toàn bộ danh sách phát</a>",
  "t47": "Đồng sáng lập &amp; Giám đốc · 2019–2021",
  "t48": "Một sự kiện TEDx với 10 diễn giả. Khi COVID-19 khiến sự kiện trực tiếp bị hủy, chúng tôi đã quay và sản xuất từ xa. Dẫn dắt ban tổ chức 10 người, tôi tuyển chọn và hướng dẫn diễn giả, rồi đăng các bài nói lên kênh TEDx.",
  "t49": "Xem: <a href=\"https://www.youtube.com/playlist?list=PLsRNoUx8w3rPfJouP2-ZyBEKvBNuS-Wxa\">Cả 10 bài nói</a> · <a href=\"https://www.instagram.com/tedxmcphs/\">TEDxMCPHS hiện nay</a>",
  "t50": "Phụ trách kinh doanh · 2022–2023",
  "t51": "Một trò chơi thẻ bài về những người hùng gốc Á và các đảo Thái Bình Dương, xưa và nay, được làm tại Teachers College, Columbia University sau làn sóng bạo lực nhắm vào người gốc Á trong đại dịch COVID-19. Đây là trò chơi đầu tiên thuộc loại này. Tôi phụ trách chiến lược kinh doanh, marketing và kết nối cộng đồng.",
  "t52": "<a href=\"https://trailblazerheroes.com/\">Trang web</a> · <a href=\"https://www.instagram.com/trailblazerheroes/\">Instagram</a> · <a href=\"https://news.columbia.edu/news/team-columbians-made-first-ever-card-game-celebrating-aapi-heroes\">Columbia News</a> · <a href=\"https://abc7ny.com/post/aapi-card-game-columbia-university-masters-students/13255488/\">ABC7 New York</a>",
  "t53": "Giảng dạy &amp; phục vụ cộng đồng",
  "t54": "<b>Trưởng ban Nghiên cứu, Phòng khám Sức khỏe Tâm thần</b>, East Harlem Health Outreach Partnership, phòng khám miễn phí do sinh viên vận hành (2025–nay)",
  "t55": "Hướng dẫn sinh viên sau đại học và sinh viên y khoa tự dẫn dắt các dự án nghiên cứu của mình",
  "t56": "Xây dựng cơ sở dữ liệu nghiên cứu đầu tiên của phòng khám từ hồ sơ sức khỏe điện tử, để sinh viên có thể nghiên cứu mô hình bệnh tật, các yếu tố xã hội quyết định sức khỏe và kết quả điều trị ở những bệnh nhân mà phòng khám phục vụ",
  "t57": "<b>Chương trình Giáo dục NeurIPS 2025</b>: <a href=\"https://openreview.net/forum?id=Xc6lUT1xug\">“How are physiological time series data used for health research with AI?”</a>",
  "t58": "<b>Giảng viên (nghiên cứu sinh)</b>, môn Modern Statistics for Modern Biology, Mount Sinai (2024–2025)",
  "t59": "<b>Gia sư và trợ giảng</b> các môn sinh học, hóa học và giải tích tại Columbia University và MCPHS University (2018–2023)",
  "t60": "<b>Tình nguyện viên đường dây hỗ trợ khủng hoảng</b>, <a href=\"https://samaritanshope.org/\">Samaritans</a>, hơn 200 giờ (2021–2022)",
  "t61": "Trên tượng Sư tử Học giả (Scholars’ Lion), Columbia University",
  "t62": "Cùng bắt đầu nhé!"
 },
 "zh": {
  "t01": "<a href=\"#about\">关于</a>",
  "t02": "<a href=\"#research\">研究</a>",
  "t03": "<a href=\"#publications\">论文</a>",
  "t04": "<a href=\"#community\">社区</a>",
  "t05": "<a href=\"#teaching\">教学</a>",
  "t06": "摄影：Tianyue Gao",
  "t07": "神经科学博士候选人 · 西奈山伊坎医学院",
  "t08": "我开发和评估人工智能模型，用于研究大脑与人类健康，让更好的医疗更快地惠及更多人。我重视严谨的研究方法，也希望让每个人都能读懂科学。",
  "t09": "<a href=\"mailto:joliehoang22@gmail.com\">邮箱</a>",
  "t10": "关于",
  "t11": "我在越南河内长大，出身于行医世家，十四岁时独自来到美国。我很早就看到，医疗服务来到人们身边是多么缓慢、多么不均，尤其是对那些出身于更艰难环境的人。这也是我投身健康科技的重要原因。",
  "t12": "转向人工智能之前，我在贝斯以色列女执事医疗中心（Beth Israel Deaconess Medical Center）和哈佛医学院跟随 <a href=\"https://www.urmc.rochester.edu/labs/lizano-lab\">Paulo Lizano 博士</a>和 <a href=\"https://sleep.hms.harvard.edu/faculty-staff/matcheri-s-keshavan\">Matcheri Keshavan 博士</a>接受科研训练。我们利用结构磁共振成像（MRI）和动脉自旋标记（ASL）寻找与精神病性障碍症状严重程度相关的脑部标志物。在哥伦比亚大学师范学院攻读硕士期间，我继续跟随 <a href=\"https://provost.duke.edu/profile/lawrence-yang-0/\">Lawrence Yang 博士</a>、<a href=\"https://www.columbiapsychiatry.org/profile/ragy-r-girgis-md\">Ragy Girgis 博士</a>和 <a href=\"https://www.tc.columbia.edu/faculty/rr2761/\">Randall Richardson-Vejlgaard 博士</a>研究精神病，并开始在较少受到关注的社区开展全球心理健康研究。",
  "t13": "现在，我是西奈山伊坎医学院 <a href=\"https://profiles.icahn.mssm.edu/alexander-charney\">Alexander Charney 博士</a>和 <a href=\"https://profiles.icahn.mssm.edu/noam-beckmann\">Noam Beckmann 博士</a>实验室的博士候选人。我的研究结合了神经科学、遗传学和人工智能：我利用 <a href=\"https://icahn.mssm.edu/research/friedman/living-brain\">Living Brain Project（活体大脑计划）</a>的血液、大脑和遗传数据构建机器学习模型，并与 NVIDIA 和 Sheba 医疗中心合作开发基因组基础模型。由于研究结果取决于方法，我研究了在基因表达研究中校正隐藏混杂因素何时有益、何时有害，以及如何公平地评测基因组深度学习模型。我还参与了一个团队，为精神病性障碍患者开发并测试一款治疗性人工智能聊天机器人。",
  "t14": "研究之余，我喜欢旅行、运动和玩纸牌游戏。最近我还在学习尾波冲浪、武术和3D打印。",
  "t15": "研究",
  "t16": "用血液和 DNA 预测大脑基因表达",
  "t17": "通过 <a href=\"https://icahn.mssm.edu/research/friedman/living-brain\">Living Brain Project（活体大脑计划）</a>，我围绕三个项目研究活体人脑组织中的基因和蛋白质表达：",
  "t18": "<b>从血液到大脑：</b>利用机器学习，通过血液转录组和神经影像预测大脑中的基因表达。我们发现，最强且可重复的血液–大脑一致性信号并非由遗传因素驱动。",
  "t19": "<b>从遗传到大脑：</b>研究遗传变异如何调控活体大脑中的基因和蛋白质表达。",
  "t20": "<b>从基因组到表达，公平评测：</b>将深度学习模型（Enformer、Basenji2、ExPecto、Xpresso）与最简单的基线进行比较：一个基因在人群中的平均表达水平。",
  "t21": "第一作者论文审稿中及准备中。",
  "t22": "基因组基础模型",
  "t23": "我与 NVIDIA 和 Sheba 医疗中心合作，参与一个让基因组基础模型更贴近真实生物学的团队。大多数模型把 DNA 当作一串字母来读，因此我们构建的模型能够读取一个人基因组的两份拷贝（DNT），学习 DNA 片段的功能而不只是填补缺失的字母（JEPA-DNA），并利用 DNA 的物理和化学性质（VANDAM），同时提供一套公平评测这些模型的标准化方法（GFMBench-API）。",
  "t24": "第一作者论文准备中。",
  "t25": "基因表达分析的严谨性",
  "t26": "通过大规模模拟和来自五种神经精神疾病的14个大脑队列，我证明了不加区分地校正替代变量（surrogate variables）会导致差异表达分析过拟合。",
  "t27": "<a href=\"https://doi.org/10.64898/2026.10.05.756826\">预印本</a> · <a href=\"https://github.com/BeckmannLab/sva_eval_dea_neuropsych\">代码</a>",
  "t28": "第一作者论文审稿中。",
  "t29": "心理健康人工智能聊天机器人",
  "t30": "我参与的团队正在开发一款人工智能聊天机器人，旨在降低精神病性障碍患者对妄想的坚信程度。我的工作重点是它的安全防护机制和合成数据，其中一项研究表明，一个独立的安全代理能帮助语言模型识别自杀意念。",
  "t31": "第一作者论文审稿中。",
  "t32": "全球心理健康与污名",
  "t33": "在哥伦比亚大学和纽约州精神病学研究所（NYSPI），我研究了污名和社会环境如何影响较少受到关注的社区的健康：参与制定针对越南河内 HIV 与癌症交叉污名的“最重要的事”（What Matters Most）方法；综述新冠疫情对边缘化人群慢性疼痛和阿片类药物使用的影响；并参与一项关于全球社会支持与求助行为的多中心研究。",
  "t34": "<a href=\"https://doi.org/10.1093/jncimonographs/lgae002\">河内的交叉污名（2024）</a> · <a href=\"https://doi.org/10.3389/fpubh.2023.1046683\">新冠、慢性疼痛与阿片类药物（2023）</a> · <a href=\"https://doi.org/10.1007/s12144-024-05764-5\">全球社会支持与求助（2024）</a>",
  "t35": "将精神病神经影像与症状严重程度联系起来",
  "t36": "我花了六年时间从事精神病的多模态磁共振研究，研究脑形态、脑灌注和脑连接组，以及它们在多中心队列中与炎症、认知和症状的关系。",
  "t37": "<a href=\"https://doi.org/10.1017/S0033291726105844\">脑灌注与症状（2026）</a> · <a href=\"https://doi.org/10.1016/j.bbi.2021.11.019\">炎症与脑结构（2022）</a> · <a href=\"https://doi.org/10.1016/j.pscychresns.2021.111249\">丘脑与海马的纵向变化（2021）</a>",
  "t38": "一个我正在开发的工具，让每个人都能读懂科学论文。理解科学，不应该需要拥有该领域的博士学位。",
  "t39": "即将推出",
  "t40": "精选论文",
  "t41": "完整列表见 <a href=\"https://scholar.google.com/citations?user=YRSLjmEAAAAJ\">Google Scholar</a>。",
  "t42": "社区项目",
  "t43": "我曾带领团队制作一款反对针对亚太裔种族歧视的卡牌游戏、一个三种语言的心理健康视频系列，以及一场 TEDx 活动。",
  "t44": "创始总监 · 2021–2023",
  "t45": "一系列以英语、中文和越南语制作的短视频，从亚洲人和亚裔美国人的视角讲述压力、失败和哀伤，把心理健康视为日常身心健康的一部分。我带领33名志愿者，并主持了越南语节目。与麻省总医院跨文化学生情绪健康中心（Mass General Hospital Center for Cross-Cultural Student Emotional Wellness）合作制作。",
  "t46": "观看：<a href=\"https://www.youtube.com/watch?v=ffSKiNlt5sE\">English</a> · <a href=\"https://www.youtube.com/watch?v=uVIa31i9oh8\">中文</a> · <a href=\"https://www.youtube.com/watch?v=WN85gxcj4tk\">Tiếng Việt</a> · <a href=\"https://www.youtube.com/playlist?list=PLzjwcVFqLH8YLKbET913ASS00vILoassy\">完整播放列表</a>",
  "t47": "联合创始人兼总监 · 2019–2021",
  "t48": "一场有10位演讲者的 TEDx 活动。新冠疫情取消了线下活动后，我们改为远程拍摄和制作。我带领一个10人委员会，挑选并辅导演讲者，并将演讲发布在 TEDx 频道上。",
  "t49": "观看：<a href=\"https://www.youtube.com/playlist?list=PLsRNoUx8w3rPfJouP2-ZyBEKvBNuS-Wxa\">全部10场演讲</a> · <a href=\"https://www.instagram.com/tedxmcphs/\">TEDxMCPHS 现况</a>",
  "t50": "商务负责人 · 2022–2023",
  "t51": "一款关于古今亚裔及太平洋岛民英雄的卡牌游戏，在新冠疫情期间反亚裔暴力事件增加后，于哥伦比亚大学师范学院制作。这是同类游戏中的第一款。我负责商业策略、市场营销和推广。",
  "t52": "<a href=\"https://trailblazerheroes.com/\">官网</a> · <a href=\"https://www.instagram.com/trailblazerheroes/\">Instagram</a> · <a href=\"https://news.columbia.edu/news/team-columbians-made-first-ever-card-game-celebrating-aapi-heroes\">Columbia News</a> · <a href=\"https://abc7ny.com/post/aapi-card-game-columbia-university-masters-students/13255488/\">ABC7 New York</a>",
  "t53": "教学与服务",
  "t54": "<b>心理健康诊所研究主任</b>，East Harlem Health Outreach Partnership（学生运营的免费诊所）（2025年至今）",
  "t55": "指导研究生和医学生独立主导自己的研究项目",
  "t56": "利用诊所的电子健康记录建立其首个研究数据库，让学生能够研究诊所服务人群的疾病模式、健康的社会决定因素和治疗结果",
  "t57": "<b>NeurIPS 2025 教育项目</b>：<a href=\"https://openreview.net/forum?id=Xc6lUT1xug\">“How are physiological time series data used for health research with AI?”</a>",
  "t58": "<b>学生讲师</b>，Modern Statistics for Modern Biology，西奈山（2024–2025）",
  "t59": "<b>辅导老师和助教</b>，在哥伦比亚大学和 MCPHS 大学教授生物、化学和微积分（2018–2023）",
  "t60": "<b>危机热线志愿者</b>，<a href=\"https://samaritanshope.org/\">Samaritans</a>，200多小时（2021–2022）",
  "t61": "坐在哥伦比亚大学的“学者之狮”雕像上",
  "t62": "让我们开始吧！"
 }
};
  var HTML_LANG = { en: 'en', vi: 'vi', zh: 'zh-Hans' };
  var els = document.querySelectorAll('[data-i18n]');
  var en = {};
  els.forEach(function (e) { en[e.getAttribute('data-i18n')] = e.innerHTML; });
  var buttons = document.querySelectorAll('.lang button');

  function apply(lang) {
    if (!HTML_LANG[lang]) lang = 'en';
    els.forEach(function (e) {
      var k = e.getAttribute('data-i18n');
      e.innerHTML = (lang !== 'en' && T[lang] && T[lang][k]) || en[k];
    });
    document.documentElement.lang = HTML_LANG[lang];
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.lang);
      var url = new URL(window.location.href);
      if (b.dataset.lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', b.dataset.lang);
      history.replaceState(null, '', url);
    });
  });

  var start = new URLSearchParams(window.location.search).get('lang');
  if (!start) { try { start = localStorage.getItem('lang'); } catch (e) {} }
  apply(start || 'en');
})();
