'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "6564464d0952b55fe132cefbb6856cf6",
".git/logs/refs/remotes/origin/main": "719647fcd8b6655edf93f618c5c09b36",
".git/logs/refs/remotes/origin/HEAD": "f44b1809e46669b56bbae37f795f4051",
".git/logs/HEAD": "fe59c86296f76e2c0a3d21a370f21a06",
".git/objects/9f/dac991ed287f0dcb18e726a0b9c17963aa3a6a": "bc4abc764c06519fb107cc5ddb422bae",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/cf4b526f67f2ba19c0ed25bb2deb9390882377": "ea70e021e78cfe6b3d8b1897fd1ff037",
".git/objects/08/9d50abc3309c159daab4115fb185b94b8633c2": "deb69ca8d6cedbc3c3af0dd033259543",
".git/objects/18/24bf6574d83048986a31dd5e5ce279327d1c94": "2cd6bc7ef677893aed7a936db303e992",
".git/objects/1b/402923554aff654910ce4bccc1f2c74e0ecda5": "d7ba7bf9ec201f6ecfee1d018e91e5a6",
".git/objects/23/2688158572a76afc4dd3ae5b843e38fd56a5f3": "c12ccbb3a5ba5c57abb8bf1325d7d573",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/d160fb665aa98cd5014b21820c2eb69a233eb6": "e2835bca9fb7248c5b1b9e5df1f3c708",
".git/objects/2a/5a5fa552450e9a77c39a6c1c4c8bc21b3e2f2a": "6e00b73e4279090b8dfefbc8167c5e82",
".git/objects/2e/0b190588e02bff174b6c35d17b53747e273701": "532cf0bf6de835fb4338cf62913568b6",
".git/objects/31/485c52b70b5b8845a4ece350b3b938175c9797": "b7ccfbe97ad198f374fba3c4b0a26b7a",
".git/objects/35/bcc2bf5d020878ff641de366ded2e4c8a4b2e4": "b3bc3d86b68b27fde8c0d4858296e617",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/6981bf28c1f2e56454c904527123d93331c6f9": "6b89238b1e1a03ed568047f5212f06f8",
".git/objects/3d/ebb57dc5cb7773c9a137b025b01b42d73262b8": "cfc5632fa22c2051df1f631e7fff37fe",
".git/objects/43/1498200b40184defe5cd6a61a9d60e15c6e074": "41f65fabfc84664d3d87e074c32d149b",
".git/objects/46/f0e75bdc4cd43633ca4b6c902e698189e5bde5": "2a2288d980181f5c4ab8ca4a141b6b90",
".git/objects/51/6c59ffa00248215a5f36ca80c0f1799141e6ad": "21ce8197e1ba978bef538e4de7a90501",
".git/objects/57/c6a23cab6a7d137b411fbb6daa4494722ae7b2": "b59165742803dd28333a8b0b6d70a1ad",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/abf9f2d0b5884d7acb4d457eefac839317168e": "0a2ec29af003d4f80697b0de9f59488d",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/63/3b7d65fc88721c1d05cba55bbcbd0a725839c6": "b40e6b93a2fbf6ae0e5b3de5f54dca16",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/25fbaac214678414496f724071d1bede82c9e8": "031c1be411a3dd08eecd5097c64ffea8",
".git/objects/63/7a1bf6159002600b96d96481b4bcbba6c4d868": "145a88d67612013425817e22dce200d1",
".git/objects/6a/effc529d1491c2e718aeaa3797f48d89c120d2": "1c4276a61f59185c8f5128df5a9df2ae",
".git/objects/6a/cb8a01bb53468168bcdb62f4b147d3418c484c": "eb975996e1f7f3a034d211263f8c6511",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/79/32108e6e60f428ea00446833843b738d1f42fd": "b9acbf3a13640042b62c2bcbdb8d4930",
".git/objects/79/51f7fc6a68b9fcbea711110a9e0784a13c546a": "465bb39d2e7a8525f78e84e19a367668",
".git/objects/79/3fe1406c95a95c0f6e761fad8fdaec4c176577": "5217447b508a0969074079ceb6da8329",
".git/objects/7e/bed562ee161356ea562e476c2f540e16159533": "c8e03308accd337c8c8aa5998d46d911",
".git/objects/80/72a0e0fdbbbd329a651b4a1f4fc1b8efbd4af6": "95c0bdec264b571d6932ef6fa07fd5b4",
".git/objects/83/b72c12e9740ab5c1b4dc4a2858d8159bb1debd": "068c29461d6d6d575739f31f6ef58a89",
".git/objects/84/a58dcb5fb610044ca2b79ddefd78956d0a6c54": "790c72f55ed16bf512e37c4850c04ffc",
".git/objects/84/d15581f16b38d6e2746b01c1b7806057cb142c": "6ba6d52b9f9329121d62b01b7d6cd1a7",
".git/objects/84/dc9a7de41e9043f0e3dc2366f93f61e79c4020": "c5e51a18c35add8ae2632e7f3bb160b1",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/8f880e48ebec7fb5c4503b8e56641d82328615": "afd2c7b7b01cb3c1ab57f26df989ddce",
".git/objects/95/16b113af30be8ec4dd69512f00103b325796b3": "ef867d762af3fb8ebcc3bc4b65504fb8",
".git/objects/95/4258e1b1e0375d5accce57ea5dc4c29e0f72dd": "4d7be58a2bfef57b8975e1ab322736c6",
".git/objects/97/650e95f93eda49bf64910c769ba581f74644e3": "8dde890984fa03b329ec95e8e431aca5",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d66523982061752c465fae8560c2196b93c19f": "d0f869495a0e6a80ff3391c62ab79b4c",
".git/objects/97/77a2415558b2458aa03444741a1607eec2dfc1": "5cdc18f5e45f9e11d642402d8fd033b3",
".git/objects/97/9c3741323dc4035414d4a4ab2d3522f2712ca0": "199068107dcd38c4e538e0abb05f8b6f",
".git/objects/9a/53b970436efefa63e76cbf3e44963b620a5400": "00a01d80a34966e9a0a71a8fcde02777",
".git/objects/9a/9271d2706179cb5183dbaf3a9b8af4fe257db5": "a4c7ee225e346aa30b3d6c35e3f1a674",
".git/objects/9a/f79ec5f575af10713572bcd50d7cf652c1de7d": "2e81ac93f19af1dd25189c9b9a780b7c",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "e8de149a87cdbffa6fe2e2cdd36fdf68",
".git/objects/a0/0a7338c208185d661031e1f3438763c0248c25": "1a354476fa154a5138615894c79573a9",
".git/objects/a0/fc85133df1fe285d72126e4c32a0fd19f61b95": "c2df826c0a8620f9f7d872f0e101d239",
".git/objects/a9/232224527d0d437da3c2eeb5d973f4f65da20e": "d72c1d7da0707398a40660cc58e205d1",
".git/objects/a9/363e9640a0b8ced17043455a810ac218f6bd12": "55ae0fe4052a1ab4fb8b6d46ade8395a",
".git/objects/ac/d2ab3ffe82c63e3376192d1946ed3b9e9f303d": "ac7edbf159043103820e8da00c4f1c6f",
".git/objects/ae/ddc8f0b3d34455d1cff5b7f3c0d3077e5f790c": "3bb1c9ed4a49cd27c1c715d46cc57a03",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/fbec59e10669ab433973b4a825efdfa4c69b1c": "5ef32f3624c21b49c5fe808867952a96",
".git/objects/b9/d8d9b99bc5770712eafb4f313960507bf24a7d": "29cc04f4fb97186ec950561f7c9bcf96",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "aa248fbf7bb1d394559bfcb1162b8075",
".git/objects/be/d8faed2c8356ecbc7c98cc30e4869a200ba132": "5dc2fb439b891acdb4f3077d6a677528",
".git/objects/bf/69ee7e1c656f2194162d311b47f43ab6ccf430": "51d6e5026dce051961538665974c57ce",
".git/objects/c1/35211165ca9de83a3c045e174ea9d44cd96257": "651c8214d8f3a2ac1ff2e8df7bcd18b8",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/b3132c2fcc89f7abaa69263a1371c10298ca1f": "d94a5322803f035bbf92c5e8b6f40db1",
".git/objects/c5/4d3b94ae564998d3f83e77591c23d3a34a2e60": "ae8049fcf4ab9f51c25b69bc1bf57560",
".git/objects/c5/80f39e5ac9c793ca3d65ae9463479cf5211010": "d975656d3ad3a94ac59f9809c05a3e42",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/ccab24c7dfaf99346d66b15c49592c20af8b83": "ea21100df371d679cbe1715160be3f37",
".git/objects/c7/a783465e78ff5a6937a35484e2a587e85a79db": "05c2d9b596b2f60960706d7947dfc4a8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/6215b2c1c485e16a37c7b93f1f372a3131814f": "af9e468efcfd76a00cc09e8a36510f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dc/7f0c5eecf8933af6374d4558ec6099ce4aa8fd": "ba04d3be7f2c8e28a3dbde0887d64bbc",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "206dcac9a8a50fd5a0b614c1afdb7b98",
".git/objects/df/96c98205fd02124fd3f65d09a5495777f27a2d": "d75a6e131f07b11cb16dbb68424085a5",
".git/objects/e5/2e4b4a3fb425a4885fe952786fd51bab9a841d": "d84c69befefb0d61f8006c68e56db2cc",
".git/objects/ea/d4e5b13aa2eb4832bd08a488fcc07616fa9af5": "0ac2eb3d80afa7617d01f8f643c57f6f",
".git/objects/ea/f38ee6560c7928d83ee5805397d65a425408db": "fb98657fa8fd27c9df482d8ed54a8070",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/a59232982662883c34edacb47be7e3f666d79c": "ffcd924b513ccb538ad27219fd50a96a",
".git/objects/ec/2f32891f1b8e92a32b404c748d3ba38c912bbc": "c46e2d115bf4ec6d95d130f08237206b",
".git/objects/ec/05cd9b5c441f418fa4324417106a556d65b061": "3f5bf6670aa56eeda45b03a2707f103e",
".git/objects/ec/2ece7a41f99b32ef988f62f83bb3814f8bc11a": "9fcdb9298bec6b6cdf2d7e3a5f9e06eb",
".git/objects/f0/351911ed425e9dc2061b36c972342fe980ddcd": "ebf23b7599532fe336303f66b1f15401",
".git/objects/f1/2bc64858a0acbfce8218ed3d4ad91e94313315": "e7868d0daa66bbd3f9222cdea6340f98",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/ad00826f8a8692f2902f67ef1f4662032681c2": "d3f20f6276c7f0c31da2abd57d5011d8",
".git/objects/74/5374ad7a108f23a3d842278a4bad1efa3b34d9": "63594673c545063d35cfa1522df84d1a",
".git/objects/09/6122b4ec576cd84177a6b069d2f63eade71462": "cb784bbd4f359bd874ea576f30ab8cb7",
".git/objects/d2/8ff7329500955ac2633513cf7f7cab4f097ab5": "4c3f82d6d1c187385c91ee0d573028e2",
".git/objects/50/f83ad8c6baede28def3e5884ef0cf6d94d3595": "74cb7601c9d8b4c11db182ad717bb38c",
".git/objects/50/8a88e9656ea5251762eccd72290dcb1c72af07": "0a5a45ca86bbfdee42b1116aef1417e0",
".git/objects/98/2a27c114e71222c24f94f8c954e7b836c7ee1e": "cb5441f85b00b8c6f250057f7a9f10fd",
".git/objects/89/4a33e6754d674eeb8f0342f612602932037a0c": "e37006de25d77d754ee039eeb30d87dc",
".git/objects/89/717093ef371f444941836f6e4c8f4f84ca2d9a": "d5640eea399551470637731794122cd2",
".git/objects/55/3373e8d85e765265a41834afd2e0cd37a760f9": "07d78fc718d7db1e3fa3659e68e627ea",
".git/objects/4e/72cf89edcf343292235085eb6eb7606fa93d07": "ae3a812dabd53513ec8b7619ce548dee",
".git/objects/c0/479ed6447d381c176611692614d1672ca469f3": "46c19d2b373271363d8e34afa01f9c9d",
".git/objects/82/0ee558e5768ad3784221676c5209267e0f2c5f": "69eb44fa9a7612d95dbf02575d4ffeeb",
".git/objects/82/cfe5355248ae6bb3afb69e7c6f7bb36ec843e7": "62a4b9b6f52b83438eb5b61505f15a0a",
".git/objects/69/d323aa0054f7df1d1f97280104970f6b6480c3": "a61292935cc85f5252475f95903e9b19",
".git/objects/f5/e361107ca1202a8e7863aa859430ffe15353a0": "9dbf74d429a4c59ed82ff6c8545134bf",
".git/objects/48/17d52d315fc7d62104653b029c4f95afd8e9d7": "34528ae7f0b253a7ce556244e91ccef8",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "2fb7c69169b24c3f5eecfe793e6dca2d",
".git/objects/52/862e695aad482709bb28546bea8a12c1abb62b": "a6bdca557c576723b29a440846233c13",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/f6/c4831f2e0a806a4da79c33b3b4a1f425f3f170": "8e6cb15c4710487d4016ab0f688d7893",
".git/objects/f6/3b12d34246589446c17d5dda86d33585905749": "9460b3640277ef4142a34ee14582b020",
".git/objects/54/fc279676da092a75ceeb81dbe9e427b84d6b35": "e87f7415bffba13b702be766d3294ccc",
".git/objects/d5/93f465da0662ab50480ec65cd79b0798055b1b": "8c50108d6b5888d4ef0de19aedb9031e",
".git/objects/aa/416df4cad76432d2a819a0ee7cbd48ca529542": "bac82374c5e1669b6da019179033628c",
".git/objects/aa/e71bd11ec42c44c7cb5a6900b4beb568e5939f": "67c58c98bc8ddbcb252173b3c9cbce44",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/68c9a5f777977d15c908f054efc970dfcf6052": "91c9b3cda1bbd6738f2f0f804ebb2e8d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/2d9addc5cd5848391a5eb426da840e7b66766f": "e4802219e51fa86b4ba332878b24245b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/b1a15f70e8f5f21fe22f87cff57467016e284f": "65ee34ba5346a4a479708f4c77694675",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/dceb530789b49ababdfe84648372001b7191d9": "a71a1e6070d3aa65ca7e92174c96da54",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/725fe5ac51132d7aeb9f33c2a17c1b3fbee510": "09d7a4e6cda81d8471ab2d44d5b506a0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/65/0d8460dd469757e15a6623b4ba9be409c0c889": "1f7d9c13230d8b4afd709ac6f998cb8a",
".git/objects/68/ebc4a077ca5158a9471237ec3d73d9ed10e35e": "051a65aa128492cb662ced3c10cc4600",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/11/2457f1b6ce94565fc10496f58884a86e1285a1": "6edf9b34c2450f585ecae1909e3ceebf",
".git/objects/02/d2085ed79699ab624124d1a9f5c2050c7efb5c": "0770ad9f7145bb3438bbc912eb5013bf",
".git/objects/e9/01cdf1f183de7a445246620cedcab5f19d1d29": "3621368b6d0ee14b992e6124f72a502a",
".git/objects/4a/4e95dbba62f84d64359e53b7f3f3afa73e9dc8": "524af1942619dafbe22b8c971726d347",
".git/objects/dd/2c1ff18728a95de703eb596e3e64ab16cd77db": "ca4d26c65cc8cfd902f38418dadafff7",
".git/objects/72/3409ee212b163d932c0a274a294b28f1f9beeb": "bcfb9b77311d1faad9381f45e90f4829",
".git/objects/59/ac4e4cbb56f46271424ff30c392bc6341ca981": "488c3b3f9e00ee49eb3d4d72c88ea1e3",
".git/objects/8b/dfa1a2f71c96d6b18993a2f16c6a820d35da89": "6e57533dc135fcd9ff3061455fb37be9",
".git/objects/8b/53d0ce0af6681e6ad77d10afac494f7941a0ad": "6ffa2a0a075d6e33e07490486eab8e06",
".git/objects/db/090c2eb9e7ad8e2ee5321571573a217a870854": "76395fd405fe0ba0e50ee118c0292e8d",
".git/objects/e2/39fc994c9c8b96f41476f5395bedcac25b68ac": "0a2445f8e4d422b59c744691cbe00efd",
".git/objects/e2/fa20d4ee20a6f969eca7ca9eea82f8668a0c36": "98a139275b4dcb5ecf47df1111981526",
".git/objects/c9/da7fbc99493b2628c864ec3eba3f5bf54443b7": "37034ef74ae476b919e0e4eddf802e23",
".git/objects/ca/f192bacb97e6900f99500b0a6805b66b3a85d4": "3bd655341ceb795fc3edc0c8cddfb4c5",
".git/objects/92/f741e61842686477b52f36d4029b4add133ea8": "bc0acfd6d419dec90a12ffdf31ecc9b9",
".git/objects/da/1d2e485dc0ca16443b621904cc156f7bd0632a": "3592733401cc1945de6c8243b677ee3e",
".git/objects/26/02fe79ef1fd645275d202cf3a92cfd0f6fdb6e": "7c54a497f747aca1d81042fa77a8180b",
".git/objects/44/85aef120a975402019f2e0188a8bed63b6d548": "b225333dcadeb186498796b9c680faaf",
".git/objects/9c/ed1c6e215005b761abb28403a4d0978aee3ae1": "83577674d1c7f6fdb6ea69f1f3f94594",
".git/objects/4c/0969625f07a40c97bb64f4eb90b79b7127e3d0": "8e4825c9b8de4f283f6ae736c1652413",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "31299a304c14aab94382bc5c25340899",
".git/objects/70/0fd8e855a84858ad979dd270de220b8e5176df": "51e9ed20166efd8742faecfeddaad043",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "07e81c3cddd0d7ab9ecbc1e383a2ae98",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "7f1ceb3657f86b0eff46fd5e62771f5e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6a1f87ff883c041ec2478b3fcae78a62",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "923fef021501d9a9e19d67300a51b36d",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "e62ccebd270b4fd776004bbe4d5d8eea",
".git/objects/21/6807fead82dcece673b9730842fddd6dc8f735": "662a9a52701f5a62c621a01ee85f641e",
".git/objects/21/5a6e73eb8186d00f1716b36fbc8e099f26f7cc": "38003deff24b691c9ab6b3fd8902ed02",
".git/objects/f9/237ef6d6e5c14465a9886f49bece620d3f330a": "4f545b56574b7b320749258b77b891ef",
".git/objects/5c/3aa4da96b5156a64dba241689b087af92e6f95": "6b7aaa23c11da3ec99199ec471406b96",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/b7/a1786d01c8ee521ca34e3389ae0571d0fb9ab9": "2ced6757c5ff1a9b3b450a5f0851e77a",
".git/objects/ba/0039ebe26e314f36abcc94c5f845f6ed2f8e23": "3e0f5f8aa9c45011c394078dc78b617e",
".git/objects/ff/e4226b798dfc13b9f747914210ec2f4e559a4c": "3ccf1306f95cad2d568767591199d4f6",
".git/objects/1a/26325b074852c0eb61105627a561eaedb5243f": "3fa8a9264f62985aa3658e0165c3c463",
".git/objects/a2/07325aa591ced6f1d0acbb3942d166490450d1": "ef4a96bf09be94b3ac03b27cc790c998",
".git/objects/2b/5339a3aa32022de168108163c38e62a57097ba": "d2de85832ee9f6210298579c6c58212a",
".git/refs/heads/main": "68525184dab961bdbc6b0b33d5583a7f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "68525184dab961bdbc6b0b33d5583a7f",
".git/COMMIT_EDITMSG": "96e44f499e266e3356347cb5a174e750",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "dad881ce5f56b44ba896026cf18fff0b",
".git/REBASE_HEAD": "17f390c6e458bbf76ee706b7301bdf65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/ORIG_HEAD": "68525184dab961bdbc6b0b33d5583a7f",
".git/index": "4b5a174862df0f1ce2f27240dd1e5303",
"assets/assets/images/PFPsq.jpg": "32c1be569294e7fa5a1d73ca7cfb84f9",
"assets/assets/icons/portfolio.png": "12326cbeb8fa6beae877b0381a8103ce",
"assets/assets/icons/suitcase.png": "e6d02eefa6455858b0fd70745e94063a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9e892a1dff2d3e4c5b53e95c203a4200",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03884bce4fbbae878004a3635a52ac65",
"assets/fonts/MaterialIcons-Regular.otf": "26cb63333f0f2992dd4258362f773ec9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/resume.pdf": "df6999af0eab95c180afd7e81db308d7",
"assets/AssetManifest.json": "673de06f1c0927a7363db347f6fce3e4",
"assets/AssetManifest.bin": "67ad47e96537b38ae6678e1f4aa34881",
"assets/AssetManifest.bin.json": "732a770db53b216960b9d531232bac0e",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/NOTICES": "6acb8005b8562d0626ba3ef3afef4b2e",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"app-ads.txt": "5d72a856519be785e92304ee281cfc39",
"google158e16b1cf0f6f61.html": "b38e4fd34efc0774f3c700aa4d5a038f",
"social-preview.png": "a50530ccd79f0216fe6519ac59ee3e43",
"version.json": "8649596933215ccdb13e3c4ed0113226",
"index.html": "ff9bd5c5c5f962d16f9b046315717ce5",
"/": "ff9bd5c5c5f962d16f9b046315717ce5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f2450d3da8c8c34ca68a959449c6c728",
"icons/Icon-192.png": "031cc85ddf815dfceb4ba95771109581",
"icons/Icon-512.png": "e5646a1ad5e9c5941a7b6d88021e70fc",
"icons/Icon-maskable-192.png": "031cc85ddf815dfceb4ba95771109581",
"icons/Icon-maskable-512.png": "e5646a1ad5e9c5941a7b6d88021e70fc",
"main.dart.js": "071b6db87b8d9300e8795b9155d25abd",
"favicon.png": "854ab52e0bb810735689fba8f56a0f23",
"manifest.json": "ec177d1723d8d5ffe8bd1fbe27e7e41e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
